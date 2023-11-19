import React from "react";
import ButtonLg from "components/design/Buttons/ButtonLg";
import ReviewStar from "components/design/ReviewStar/ReviewStar";

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
        <ReviewStar randomRating={getRandomRating()} />
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

function getRandomRating() {
  // Generate a random number between 0 and 1
  const randomValue = Math.random();

  // Scale and shift the random number to be in the range 1 to 5
  const rating = randomValue * 4 + 1;

  // Round to one decimal place
  return Math.round(rating * 10) / 10;
}
