import { Axios } from "axios";

const axios = new Axios({
  baseURL: "https://restcountries.com",
});

export default axios;
