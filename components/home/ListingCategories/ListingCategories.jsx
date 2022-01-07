import style from "../../../styles/main.module.scss";
import ButtonMd from "../../design/Buttons/ButtonMd";

function ListingCategories() {
  return (
    <div className="container lg:px-4 pb-24">
      <div className="text-center">
        {/* title */}
        <h1 className="text-title-800 mb-6">Listing Categories</h1>
        {/* description */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
      {/* categories buttons */}
      <div className={`${style.row}`}>
        <ButtonMd>All</ButtonMd>
        <ButtonMd>Houses</ButtonMd>
        <ButtonMd>Villa</ButtonMd>
        <ButtonMd>Appartement</ButtonMd>
      </div>
    </div>
  );
}

export default ListingCategories;
