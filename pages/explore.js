import axios from "axios";
import CardCategories from "../components/design/Card/CardCategories";
import style from "../styles/main.module.scss";
import RentSellToggle from "../components/home/DicoverPerfectHome/RentSellToggle/RentSellToggle";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import listforSale from "../data/listforSale";
import GoogleMap from "../components/googleMap/googleMap";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";

export default function Explore() {
  const [listingforSale, setListingforSale] = useState([]);
  const fetched = listingforSale.length;

  useEffect(() => {
    const fetchListforSale = async () => {
      axios.request(listforSale).then(function (response) {
        setListingforSale(response.data.hits);
      });
    };

    fetchListforSale();
  }, []);

  // const ListingsCategories = `category= "hhhhh"`;

  // console.log(listingforSale);

  return (
    <>
      {fetched !== 0 ? (
        <>
          <div className="bg-green-200 h-96 relative flex justify-center">
            <GoogleMap />
            <RentSellToggle className={`absolute -bottom-14`} />
          </div>
          <div className="container mx-auto px-7 pb-24 pt-60">
            {/* listings cards */}
            <div className={`${style.row} justify-between gap-y-4`}>
              {listingforSale?.map((listing, key) => (
                <div
                  className="md:w-4/12 lg:w-3/12 w-full h-full flex-initial"
                  key={key}
                >
                  <CardCategories
                    src={`${listing.coverPhoto.url}`}
                    title={`${listing.title}`}
                    description={`${listing.location.map(
                      (item) => ` ${item.name}`
                    )}`}
                    price={`${listing.price}`}
                    category={`${JSON.stringify(listing.category)}`}
                  />
                </div>
              ))}
            </div>

            <div className={`${style.row} justify-center mt-20`}>
              {/* pagination */}
              <ul className={`${style.pagination}`}>
                {/* left */}
                <li>
                  <a href="#">
                    <FaChevronLeft />
                  </a>
                </li>
                <li>
                  <a href="#" className={`${style.active}`}>
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                {/* right */}
                <li>
                  <a href="#">
                    <FaChevronRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
