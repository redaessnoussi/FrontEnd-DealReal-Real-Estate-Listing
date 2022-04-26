import axios from "axios";

// Villas -> 3
// Apartment -> 4
// Office -> 5
// Shop -> 6
// Warehouse -> 7
// Factory -> 8
// Labour camp -> 9
// Commercial Building -> 10
// Other Commercial -> 11

export const baseUrl = "https://bayut.p.rapidapi.com";

export const listingsAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "43ac89b881mshcc7664094152785p160748jsnce9c86269162",
    },
  });

  return data;
};
