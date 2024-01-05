import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { listingsAPI } from "data/listingsAPI";
import GoogleMap from "components/googleMap/googleMap";
import style from "styles/main.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import Image from "next/image";
import CardReservation from "components/design/Card/CardReservation";
import ListingOverview from "components/ListingDetails/ListingOverview";
import AgencyContact from "components/ListingDetails/AgencyContact";
import ListingInfos from "components/ListingDetails/ListingInfos";
import SocialMediaButtons from "components/design/SocialMediaButtons/SocialMediaButtons";
import ImageModal from "components/ImageModal/ImageModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingPage from "components/design/LoadingPage/LoadingPage";

export default function ListingDetails() {
  const [isloading, setloading] = useState(false);
  const [listingDetail, setListingDetail] = useState([]);
  const [listings, setListings] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [listingPurpose, setListingPurpose] = useState("for-sale");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchListingData = async () => {
    setloading(true);
    try {
      const detailResponse = await listingsAPI(`properties/id/${id}`);
      const propertiesResponse = await listingsAPI(
        `properties/purpose/${listingPurpose}?page=1&limit=4`
      );

      setListings(propertiesResponse.properties);
      setListingDetail(detailResponse);
      // setFetched(true);
      // setloading(false);
    } catch (error) {
      console.error("Error fetching listing data:", error);
    }
  };

  useEffect(() => {
    // Fetch listings when component mounts
    id && fetchListingData();
  }, [id]);

  useEffect(() => {
    listingDetail.length > 0 && setloading(false);
  }, [listingDetail]);

  return (
    <>
      {isloading ? (
        <LoadingPage />
      ) : (
        <>
          {listingDetail.length > 0 && (
            <>
              <div className="container mx-auto px-7 py-7">
                {/* listings cards */}
                {/* title with social media sharing buttons */}
                <div className={`${style.row} justify-between gap-y-4 mb-3`}>
                  <h3 className="text-title-800 font-bold">
                    {listingDetail[0]?.title}
                  </h3>
                  <SocialMediaButtons />
                </div>
                {/* location with marker */}
                <div className={`${style.row} mb-10`}>
                  <MarkerLocation />
                  <p>
                    {listingDetail[0]?.location.area},{" "}
                    {listingDetail[0]?.location.city}
                  </p>
                </div>
                {/* multiple listing image */}
                {/* thumbnail image */}
                <div className="w-full px-4 mb-8">
                  <Image
                    src={listingDetail[0].images[0].url}
                    layout="responsive"
                    width={1200}
                    height={548}
                    alt="First Image"
                    className="rounded-lg object-cover"
                    priority={true}
                  />
                </div>
                {/* slider images */}
                <div className="mb-8">
                  <Slider {...settings}>
                    {listingDetail[0]?.images.map((image, key) => (
                      <div
                        key={key}
                        className="px-4"
                        onClick={() => openModal(image.url)}
                      >
                        <Image
                          src={image.url}
                          width={376}
                          height={255}
                          layout="responsive"
                          alt={`property__`}
                          className="rounded-lg object-cover"
                          priority={false}
                        />
                      </div>
                    ))}
                  </Slider>
                  {/* Modal for larger images */}
                  <ImageModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    selectedImage={selectedImage}
                  />
                </div>
                <div className={`${style.row} justify-between`}>
                  <div className="w-full md:w-6/12 lg:w-7/12 xl:w-8/12 md:pr-3">
                    {/* Listing description and details */}
                    {/* Listing description */}
                    <h4 className="text-title-800 font-bold mb-6">
                      Description
                    </h4>
                    <div className="mb-10">
                      {listingDetail[0]?.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: listingDetail[0].description
                              .replace(/\r\n/g, "<br/>")
                              .replace(/•/g, "&#8226;"),
                          }}
                        />
                      ) : (
                        "N/A"
                      )}
                    </div>
                    {/* Lisiting overview */}
                    <ListingOverview
                      style={style}
                      listingDetail={listingDetail}
                      numberWithCommas={numberWithCommas}
                    />
                    {/* Listing details */}
                    <ListingInfos
                      style={style}
                      listingDetail={listingDetail}
                      numberWithCommas={numberWithCommas}
                      capitalizeFirstLetter={capitalizeFirstLetter}
                    />
                  </div>
                  <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 md:pl-3 mb-6 md:mb-0">
                    {/* Reservation card form*/}
                    <CardReservation
                      style={style}
                      listingDetail={listingDetail}
                      numberWithCommas={numberWithCommas}
                    />
                  </div>
                </div>
                <h4 className="font-bold text-slate-700 mb-6">Address</h4>
              </div>
              {/* Listing address on the map */}
              <div className="bg-green-200 h-96 relative flex justify-center mb-10">
                <GoogleMap properties={listingDetail} />
              </div>
              {/* Agency contact information */}
              <AgencyContact style={style} listings={listings} />
            </>
          )}
        </>
      )}
    </>
  );
}

function numberWithCommas(x) {
  if (x === undefined) {
    return null;
  }
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function capitalizeFirstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

const MarkerLocation = () => (
  <HiLocationMarker className="text-primary-700 w-6 h-6" />
);
