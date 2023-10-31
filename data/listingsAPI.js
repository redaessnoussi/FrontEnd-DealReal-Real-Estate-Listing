import axios from "axios";

export const baseUrl = "https://deal-real.netlify.app"; // Replace with your backend API URL

export const listingsAPI = async (endpoint) => {
  const url = `${baseUrl}/api/${endpoint}`;
  const { data } = await axios.get(url);

  return data;
};
