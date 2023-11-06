import style from "styles/main.module.scss";

function AgencyDiscover() {
  const categoriesData = [
    {
      categoryName: "Office",
      categoryCount: 15,
    },
    {
      categoryName: "House",
      categoryCount: 20,
    },
    {
      categoryName: "Shop",
      categoryCount: 18,
    },
    {
      categoryName: "Apartment",
      categoryCount: 37,
    },
  ];

  return (
    <>
      <h3 className="text-title-800 font-bold mb-4">Discover</h3>
      <div className="rounded-lg border-2 p-4">
        {categoriesData.map((categories, key) => (
          <div
            className={`${style.row} justify-between ${
              key == categoriesData.length - 1 ? "" : "mb-4"
            }`}
            key={key}
          >
            <div className="w-10/12 flex-initial">
              <p className="text-title-800 font-medium">
                {categories.categoryName}
              </p>
            </div>
            <div className="w-auto flex-initial">
              <p className="text-right">({categories.categoryCount})</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AgencyDiscover;
