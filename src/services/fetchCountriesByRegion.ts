import axios from "../utils/axios";
import HttpStatus from "../utils/http-status";

async function fetchCountriesByRegion<T>(region: string) {
  const { data, status } = await axios.get(`/v3.1/region/${region}`);

  console.log(`🚀 ~ data`, data);
  if (HttpStatus.OK == status) return JSON.parse(data) as T[];

  if (HttpStatus.INTERNAL_SERVER_ERROR == status)
    throw new Error("API threw 500.");
}

export default fetchCountriesByRegion;
