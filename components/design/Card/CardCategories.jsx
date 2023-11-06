import Image from "next/image";
import Card from "components/design/Card/Card";
import style from "styles/main.module.scss";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";

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
        className={`text-title-800 mb-2 font-bold hover:underline ${style.text_truncate}`}
      >
        <Link className={`${style.stretched_link}`} href={`/explore/${id}`}>
          {title}
        </Link>
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
        <ul className={`flex items-center`}>
          <li className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-star-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </li>
          <li>
            <span className="text-title-800">4.8</span>
          </li>
        </ul>
      </div>
    </Card>
  );
}

export default CardCategories;
