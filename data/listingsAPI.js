// Villas -> 3
// Apartment -> 4
// Office -> 5
// Shop -> 6
// Warehouse -> 7
// Factory -> 8
// Labour camp -> 9
// Commercial Building -> 10
// Other Commercial -> 11

const hitsPerPage = 0;
const listingCategory = 0;

const listingsAPI = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-sale",
    hitsPerPage: hitsPerPage,
    page: "0",
    lang: "en",
    rentFrequency: "monthly",
    categoryExternalID: listingCategory,
  },
  headers: {
    "x-rapidapi-host": "bayut.p.rapidapi.com",
    "x-rapidapi-key": "43ac89b881mshcc7664094152785p160748jsnce9c86269162",
  },
};

// console.log(listforSale.params.hitsPerPage);

export default listingsAPI;
