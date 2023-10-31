import axios from "axios";

export const baseUrl = "https://deal-real-real-estate-listing.vercel.app"; // Replace with your backend API URL

export const listingsAPI = async (endpoint) => {
  const url = `${baseUrl}/api/${endpoint}`;
  const { data } = await axios.get(url);

  return data;
};
