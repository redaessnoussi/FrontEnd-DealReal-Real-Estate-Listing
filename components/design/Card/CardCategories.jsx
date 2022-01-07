import Image from "next/image";
import Card from "./Card";
import style from "../../../styles/main.module.scss";

function CardCategories({ className, title, src, description, price }) {
  return (
    <Card className={className}>
      <Image
        src={src}
        width="100%"
        height="100%"
        layout="responsive"
        alt="property"
        className="rounded-lg"
      ></Image>
      {/* listing title */}
      <h5 className="text-title-800 mt-4 mb-2 font-bold">{title}</h5>
      {/* listing description */}
      <div className={`${style.row} items-center mb-2`}>
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
        <p className="text-xs">{description}</p>
      </div>
      {/* listing price */}
      <div className={`${style.row} items-center justify-between`}>
        <h5 className="text-title-800 font-bold">{price}</h5>
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
