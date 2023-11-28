import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

function Pagination({ style, totalPages, page }) {
  const router = useRouter(); // Use the useRouter hook to access the router object

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      // Get the current pathname from the router
      const currentPathname = router.pathname;

      console.log("listingPurpose pagination", listingPurpose);

      // Get the previous query parameters from the router
      const { listingPurpose, page, ...otherParams } = router.query;

      // Construct the new URL with the updated page parameter
      const url =
        currentPathname +
        "?" +
        Object.entries({ listingPurpose, ...otherParams, page: newPage })
          .filter(([key, value]) => value !== undefined)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

      // Update the URL and fetch data for the new page
      router.push(url);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`${style.row} justify-center mt-20`}>
      <ul className={`${style.pagination}`}>
        <li>
          <a onClick={() => handlePageChange(page - 1)}>
            <FaChevronLeft />
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              className={pageNumber === page ? `${style.active}` : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li>
          <a onClick={() => handlePageChange(page + 1)}>
            <FaChevronRight />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
