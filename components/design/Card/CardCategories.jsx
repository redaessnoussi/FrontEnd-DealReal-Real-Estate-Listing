import Image from "next/image";
import Card from "components/design/Card/Card";
import style from "styles/main.module.scss";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import ReviewStar from "components/design/ReviewStar/ReviewStar";

function CardCategories({
  className,
  category,
  title,
  src,
  location,
  price,
  id,
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // console.log(src);
  return (
    <Link href={`/explore/${id}`}>
      <a>
        <Card className={className}>
          <Image
            src={src}
            width="100%"
            height="100%"
            layout="responsive"
            alt={`property__`} // Use a unique alt text for each image
            className="rounded-lg object-cover"
          />
          {/* listing category */}
          <div className="flex flex-wrap gap-2 my-4">
            <div className="py-2 px-4 bg-primary-100 text-primary-700 rounded-lg w-fit">
              {capitalizeFirstLetter(category)}
            </div>
          </div>

          {/* listing title */}
          <h5
            className={`text-title-800 mb-2 font-bold ${style.text_truncate}`}
          >
            {title}
          </h5>
          {/* listing location */}
          <div className={`flex flex-nowrap mb-2`}>
            <div className="w-auto mr-2">
              <HiLocationMarker className="text-primary-700 w-4 h-4" />
            </div>
            <p className={`${style.text_truncate} text-xs`}>{location}</p>
          </div>
          {/* listing price */}
          <div className={`${style.row} items-center justify-between`}>
            <h5 className="text-title-800 font-bold">
              <div className="flex">
                <span className="mr-2">د.إ</span>
                {`${numberWithCommas(price)}`}
              </div>
            </h5>
            {/* review star */}
            <ReviewStar randomRating={getRandomRating()} />
          </div>
        </Card>
      </a>
    </Link>
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

export default CardCategories;
