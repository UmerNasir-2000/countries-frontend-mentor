import { useState } from "react";
import CountriesList from "../components/countries";
import DropDownList from "../components/dropdownlist/dropDownList";
import Search from "../components/search";
import useDebounce from "../hooks/useDebounce";
import useFetchContries from "../hooks/useFetchCountries";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);

  const countries = useFetchContries(debouncedSearch);

  if (countries)
    return (
      <>
        <div className="p-7 flex items-center justify-between mx-auto container max-w-screen-2xl">
          <Search search={search} setSearch={setSearch} />
          <DropDownList setFilter={setFilter} />
        </div>
        <CountriesList countries={countries} filter={filter} />
      </>
    );
  else return <div>Loading...</div>;
};

export default HomePage;
