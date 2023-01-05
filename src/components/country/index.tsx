import { Link } from "react-router-dom";
import CountryList from "../../interfaces/countries.interface";

const Country = ({ capital, flag, name, population, region }: CountryList) => {
  return (
    <Link to={`/details/${name}`}>
      <article className="bg-darkBlue w-[300px] h-[300px] justify-self-center rounded-md shadow-md overflow-hidden dark:bg-veryLightGray dark:text-veryDarkBlue">
        <div>
          <img
            className="w-full h-[150px] object-cover"
            src={flag}
            alt={`flag of ${name}`}
          />
        </div>
        <div className="p-6">
          <h1 className="font-semibold tracking-wide mb-2 shadow-sm">
            {name.length > 23 ? `${name.slice(0, 23)}...` : name}
          </h1>
          <div>
            <div className="font-light">
              Population: {population.toLocaleString()}
            </div>
            <div className="font-light">Region: {region}</div>
            <div className="font-light">Capital: {capital}</div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Country;
