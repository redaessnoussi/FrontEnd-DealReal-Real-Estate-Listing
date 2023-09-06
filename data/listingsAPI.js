import axios from "axios";

export const baseUrl = "http://localhost:5000"; // Replace with your backend API URL

export const listingsAPI = async (endpoint) => {
  const url = `${baseUrl}/api/${endpoint}`;
  const { data } = await axios.get(url);

  return data;
};
