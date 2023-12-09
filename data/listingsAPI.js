import axios from "axios";
// require("dotenv").config();

const apiURL = process.env.API_URL;

export const baseUrl = apiURL; // Replace with your backend API URL

export const listingsAPI = async (endpoint) => {
  const url = `${baseUrl}/api/${endpoint}`;
  const { data } = await axios.get(url);

  return data;
};
