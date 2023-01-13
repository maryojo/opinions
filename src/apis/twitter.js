import axios from "axios";

const BASE_URL = process.env.REACT_APP_TWITTER_BASE_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_TWITTER_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_TWITTER_API_HOST
  }
})