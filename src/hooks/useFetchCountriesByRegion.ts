import { useQuery } from "@tanstack/react-query";
import Country from "../interfaces/country.interface";
import fetchCountriesByRegion from "../services/fetchCountriesByRegion";

const useFetchCountriesByRegion = (region: string) => {
  const { data: countries } = useQuery({
    queryKey: ["country-region", region],
    queryFn: () => fetchCountriesByRegion<Country>(region),
  });

  return countries;
};

export default useFetchCountriesByRegion;
