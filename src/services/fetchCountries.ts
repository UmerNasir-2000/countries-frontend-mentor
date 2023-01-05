import axios from "../utils/axios";
import HttpStatus from "../utils/http-status";

async function fetchCountries<T>(search?: String) {
  let endpoint = search && search !== "" ? `/v2/name/${search}` : "/v2/all";

  console.log(`🚀 ~ endpoint`, endpoint);
  const { data, status } = await axios.get(endpoint);

  if (HttpStatus.OK == status) return JSON.parse(data) as T[];

  if (HttpStatus.INTERNAL_SERVER_ERROR == status)
    throw new Error("API threw 500.");
}

export default fetchCountries;
