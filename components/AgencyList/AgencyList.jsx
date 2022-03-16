import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import ButtonLg from "../design/Buttons/ButtonLg";
import style from "../../styles/main.module.scss";

function AgencyList() {
  const agencyData = [
    {
      agencyName: "Grand House Real Estate",
      agencyImage: "/images/dream-house.jpg",
      agencyLocation: "Ohio St. South Gate, California",
      agencyPhone: "+90 8989787 898",
      agencyEmail: "hello@grandhouse.com",
    },
    {
      agencyName: "Grand House Real Estate",
      agencyImage: "/images/dream-house.jpg",
      agencyLocation: "Ohio St. South Gate, California",
      agencyPhone: "+90 13847209 898",
      agencyEmail: "hello@grandhouse.com",
    },
    {
      agencyName: "Luxury House Deals",
      agencyImage: "/images/dream-house.jpg",
      agencyLocation: "Ohio St. South Gate, California",
      agencyPhone: "+90 8989787 898",
      agencyEmail: "hello@grandhouse.com",
    },
    {
      agencyName: "Grand House Real Estate",
      agencyImage: "/images/dream-house.jpg",
      agencyLocation: "Ohio St. South Gate, California",
      agencyPhone: "+90 8989787 898",
      agencyEmail: "hello@grandhouse.com",
    },
  ];

  return (
    <>
      {agencyData.map((agency, key) => (
        <div
          key={key}
          className={`${style.row} px-4 py-8 border-2 rounded-xl justify-between
          ${key == agencyData.length - 1 ? "" : "mb-8"}
          `}
        >
          {/* agency image  */}
          <div className="w-full md:w-3/12 lg:w-auto mb-4 md:mb-0">
            <Image
              src={`${agency.agencyImage}`}
              alt="Agency Image"
              width={160}
              height={160}
              layout="fixed"
              className="object-cover"
            />
          </div>
          {/* agency information */}
          <div className="w-full md:w-5/12 lg:w-6/12">
            <h4 className="font-bold text-title-800 mb-3">
              {`${agency.agencyName}`}
            </h4>
            <div className="flex mb-3">
              <HiLocationMarker className="text-primary-700 w-6 h-6 mr-1" />
              <p className="text-sm">{`${agency.agencyLocation}`}</p>
            </div>
            <div className="flex items-center mb-3">
              <HiOutlinePhone className="w-6 h-6 mr-2" />
              <p className="text-sm">{`${agency.agencyPhone}`}</p>
            </div>
            <div className="flex items-center mb-3">
              <HiOutlineMail className="w-6 h-6 mr-2" />
              <p className="text-sm">{`${agency.agencyEmail}`}</p>
            </div>
          </div>
          {/* view listing button */}
          <div className="w-full md:w-3/12 lg:w-auto">
            <ButtonLg className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white md:mb-0">
              View listings
            </ButtonLg>
          </div>
        </div>
      ))}
    </>
  );
}

export default AgencyList;
