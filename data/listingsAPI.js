// Apartment -> 4
// Townhouses -> 16
// Villas -> 3
// Penthouses -> 18
// Hotel Apartments -> 21
// Villa Compound -> 19
// Residential Plot -> 14
// Residential Floor -> 12
// Residential Building -> 17
// Office -> 5
// Shop -> 6
// Warehouse -> 7
// Labour camp -> 9
// Commercial Villa -> 25
// Bulk Units -> 20
// Commercial Plot -> 15
// Commercial Floor -> 13
// Commercial Building -> 10
// Factory -> 8
// Industrial Land -> 22
// Mixed Use Land -> 23
// Showroom -> 24
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
