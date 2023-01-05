import { useQuery } from "@tanstack/react-query";
import Country from "../interfaces/country.interface";
import fetchCountries from "../services/fetchCountries";

const useFetchCountryByName = (search: string) => {
  const { data: countries } = useQuery({
    queryKey: ["country", search],
    queryFn: () => fetchCountries<Country>(search),
  });

  return countries;
};

export default useFetchCountryByName;
