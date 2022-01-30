import axios from "axios";
import CardCategories from "../components/design/Card/CardCategories";
import style from "../styles/main.module.scss";
import RentSellToggle from "../components/home/DicoverPerfectHome/RentSellToggle/RentSellToggle";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import listingsAPI from "../data/listingsAPI";
import GoogleMap from "../components/googleMap/googleMap";
import LoadingPage from "../components/design/LoadingPage/LoadingPage";

export default function Explore() {
  const [listingforSale, setListingforSale] = useState([]);
  const [rentSale, setrentSale] = useState("for-sale");
  const fetched = listingforSale.length;

  const rentSaleToggle = (data) => {
    data.textContent === "Rent"
      ? setrentSale("for-rent")
      : setrentSale("for-sale");
  };

  useEffect(() => {
    const fetchlistingsAPI = async () => {
      // listing items to show
      listingsAPI.params.purpose = rentSale;
      listingsAPI.params.hitsPerPage = 16;
      axios.request(listingsAPI).then(function (response) {
        setListingforSale(response.data.hits);
        console.log(response.data.hits);
      });
    };

    fetchlistingsAPI(rentSale);
  }, [rentSale]);

  return (
    <>
      {fetched !== 0 ? (
        <>
          <div className="bg-green-200 h-96 relative flex justify-center">
            <GoogleMap listingforSale={listingforSale} />
            <RentSellToggle
              className={`absolute -bottom-64 md:-bottom-14 lg:w-9/12 px-7`}
              rentSaleToggle={rentSaleToggle}
            />
          </div>
          <div className="container mx-auto px-7 pb-24 pt-96 md:pt-60">
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
