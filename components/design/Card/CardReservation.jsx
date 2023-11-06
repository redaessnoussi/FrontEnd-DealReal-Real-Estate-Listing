import React from "react";
import ButtonLg from "components/design/Buttons/ButtonLg";

export default function CardReservation({
  style,
  listingDetail,
  numberWithCommas,
}) {
  const listingPrice = listingDetail[0].price;
  const formattedPrice = numberWithCommas(listingPrice);

  return (
    <div className={`${style.card}`}>
      {/* card header */}
      {/* card title */}
      <div className={`${style.card_header} flex justify-between`}>
        <h4 className="text-title-800 font-semibold">
          <div className="flex">
            <span className="mr-2">د.إ</span>
            {formattedPrice}
          </div>
          {/* review */}
        </h4>
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
            <span className="text-title-800 mr-1 font-semibold">4.8</span>
          </li>
          <span>(120 Review)</span>
        </ul>
      </div>
      {/* card body */}
      <div className={`${style.card_body}`}>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-title-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={style.input_default}
              placeholder="Your Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-title-800 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={style.input_default}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="text-title-800 font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={style.input_default}
              placeholder="Select"
            />
          </div>
          <ButtonLg
            type={`button`}
            className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white w-full justify-center mb-4"
          >
            Reserve
          </ButtonLg>
          <p className="text-center">
            Certain reservations may also require a security deposit.
          </p>
        </form>
      </div>
    </div>
  );
}
