const listforSale = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-sale",
    hitsPerPage: "10",
    page: "0",
    lang: "en",
    sort: "city-level-score",
    rentFrequency: "monthly",
    categoryExternalID: "4",
  },
  headers: {
    "x-rapidapi-host": "bayut.p.rapidapi.com",
    "x-rapidapi-key": "43ac89b881mshcc7664094152785p160748jsnce9c86269162",
  },
};

// console.log(listforSale);

export default listforSale;
