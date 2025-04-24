import axios from "axios";

const BASE_URL = process.env.NEXT_BASE_URL_BE! || "https://be-ig.vercel.app/api";

export default axios.create({
  baseURL: BASE_URL,
});
