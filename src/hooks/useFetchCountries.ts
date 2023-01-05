import { useQuery } from "@tanstack/react-query";
import CountryList from "../interfaces/countries.interface";
import fetchCountries from "../services/fetchCountries";

const useFetchContries = (search?: string) => {
  let queryKey: string[] = ["countries"];

  if (search && search !== "") queryKey = ["countries", search];

  const { data: countries } = useQuery({
    queryKey: queryKey,
    queryFn: () => fetchCountries<CountryList>(search),
  });

  return countries;
};

export default useFetchContries;
