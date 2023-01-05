import CountryList from "../../interfaces/countries.interface";
import Country from "../country";

interface CountriesListProps {
  countries: CountryList[];
  filter: string;
}

const CountriesList = ({ countries, filter }: CountriesListProps) => {
  if (filter !== "")
    return (
      <section className="mx-auto container max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center p-7">
        {countries
          .filter((country) => country.region === filter)
          .map((country) => (
            <Country {...country} key={country.name} />
          ))}
      </section>
    );
  else
    return (
      <section className="mx-auto container max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center items-center p-7">
        {countries.map((country) => (
          <Country {...country} key={country.name} />
        ))}
      </section>
    );
};

export default CountriesList;
