// import Image from "next/image";
import CardCategories from "../components/design/Card/CardCategories";
import style from "../styles/main.module.scss";
import RentSellToggle from "../components/home/DicoverPerfectHome/RentSellToggle/RentSellToggle";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import listforSale from "../data/listforSale";
import { useEffect, useState } from "react";
// import ListingsForSale from "./ListingsForSale/ListingsForSale";

export default function Explore() {
  const [listingforSale, setListingforSale] = useState([]);

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
      <div className="container mx-auto px-7 py-24">
        <RentSellToggle />
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
  );
}
