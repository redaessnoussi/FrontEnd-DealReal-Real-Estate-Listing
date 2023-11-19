import Image from "next/image";
import style from "styles/main.module.scss";
import ButtonLg from "components/design/Buttons/ButtonLg";
import ReviewStar from "components/design/ReviewStar/ReviewStar";
import Card from "components/design/Card/Card";
import Link from "next/link";

function NewestListing({ listings }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="container py-24">
      <div className={`${style.row} justify-between items-center mb-8`}>
        {/* headline */}
        <h1 className="text-title-800 mb-0">Newest Listings</h1>
        <ButtonLg
          type={`button`}
          className="border-secondary-500 bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 "
        >
          <span className="text-white">View All</span>
        </ButtonLg>
      </div>
      <div className={`${style.row} justify-between`}>
        {/* listings cards */}
        {/* lisitngs */}
        {listings?.map(
          (listing, key) =>
            key < 4 && (
              <div
                className="md:w-6/12 lg:w-3/12 w-full flex-initial"
                key={key}
              >
                <Link href={`/explore/${listing._id}`}>
                  <a>
                    <Card>
                      <Image
                        src={listing.images[0].url}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        alt={`property__`} // Use a unique alt text for each image
                        className="rounded-lg object-cover"
                      />
                      {/* listing title */}
                      <h5
                        className={`text-title-800 mb-2 mt-4 font-bold ${style.text_truncate}`}
                      >
                        {listing.title}
                      </h5>
                      {/* listing description */}
                      <div className={`flex items-center mb-2`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary-700 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className={`${style.text_truncate} text-xs`}>
                          {" "}
                          {`${listing.location.country}, ${listing.location.city}, ${listing.location.area}`}
                        </p>
                      </div>
                      {/* listing price */}
                      <div
                        className={`${style.row} items-center justify-between`}
                      >
                        <h5 className="text-title-800 font-bold">
                          <div className="flex">
                            <span className="mr-2">د.إ</span>
                            {`${numberWithCommas(listing.price)}`}
                          </div>
                        </h5>
                        <ReviewStar randomRating={getRandomRating()} />
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
}

function getRandomRating() {
  // Generate a random number between 0 and 1
  const randomValue = Math.random();

  // Scale and shift the random number to be in the range 1 to 5
  const rating = randomValue * 4 + 1;

  // Round to one decimal place
  return Math.round(rating * 10) / 10;
}

export default NewestListing;
