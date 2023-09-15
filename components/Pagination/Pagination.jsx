import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";

function Pagination({ style, totalPages, page, listingPurpose }) {
  const router = useRouter(); // Use the useRouter hook to access the router object

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      // Check if the newPage is within valid bounds
      // Update the URL and fetch data for the new page
      router.push(`/explore?listingPurpose=${listingPurpose}&page=${newPage}`);
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
