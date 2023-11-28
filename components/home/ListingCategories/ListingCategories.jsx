import style from "styles/main.module.scss";
import ButtonMd from "components/design/Buttons/ButtonMd";
import CardCategories from "components/design/Card/CardCategories";

function ListingCategories({ listings }) {
  return (
    <div className="container pb-24">
      <div className="text-center">
        {/* title */}
        <h1 className="text-title-800 mb-6">Listing Categories</h1>
        {/* description */}
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
      {/* categories buttons */}
      <div className={`${style.row} gap-3 justify-center mb-8`}>
        {/* buttons 1 */}
        <div className="w-auto">
          <ButtonMd
            type={`button`}
            className={`bg-secondary-500 border-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 text-white`}
          >
            All
          </ButtonMd>
        </div>
        {/* buttons 2 */}
        <div className="w-auto">
          <ButtonMd
            type={`button`}
            className={`bg-white text-secondary-500 border-secondary-500 hover:text-white hover:bg-secondary-500 hover:border-secondary-500`}
          >
            Houses
          </ButtonMd>
        </div>
        {/* buttons 3 */}
        <div className="w-auto">
          <ButtonMd
            type={`button`}
            className={`bg-white text-secondary-500 border-secondary-500 hover:text-white hover:bg-secondary-500 hover:border-secondary-500`}
          >
            Villa
          </ButtonMd>
        </div>
        {/* buttons 4 */}
        <div className="w-auto">
          <ButtonMd
            type={`button`}
            className={`bg-white text-secondary-500 border-secondary-500 hover:text-white hover:bg-secondary-500 hover:border-secondary-500`}
          >
            Appartement
          </ButtonMd>
        </div>
      </div>
      {/* listings cards */}
      <div className={`${style.row} gap-y-4`}>
        {listings?.map(
          (listing, key) =>
            key < 8 && (
              <div
                className="md:w-6/12 lg:w-3/12 w-full flex-initial"
                key={key}
              >
                <CardCategories
                  id={listing._id}
                  src={listing.images[0].url}
                  title={listing.title}
                  location={`${listing.location.country}, ${listing.location.city}, ${listing.location.area}`}
                  price={listing.price}
                  category={listing.category}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ListingCategories;
