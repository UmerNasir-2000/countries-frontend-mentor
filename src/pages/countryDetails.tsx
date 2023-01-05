import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import useFetchCountryByName from "../hooks/useFetchCountryByName";

const CountryDetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  let countries = useFetchCountryByName(name || "");

  return (
    <div className="mx-auto max-w-screen-2xl mt-8 ml-60">
      <button
        className=" bg-darkBlue rounded px-8 py-2 shadow-2xl flex items-center dark:bg-veryLightGray dark:text-veryDarkBlue"
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
      </button>
      {countries && (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
          <img
            src={countries[0].flag}
            alt={`Flag for ${countries[0].flag}`}
            className="w-4/5 rounded-md shadow-xl"
          />
          <div>
            <div>
              <h1 className="font-bold text-3xl tracking-wide drop-shadow mb-8">
                {countries[0].name}
              </h1>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <div className="mb-2">
                  Native Name: {countries[0].nativeName}
                </div>
                <div className="mb-2">
                  Population: {countries[0].population.toLocaleString()}
                </div>
                <div className="mb-2">Region: {countries[0].region}</div>
                <div className="mb-2">Sub Region: {countries[0].subregion}</div>
                <div className="mb-2">Capital: {countries[0].capital}</div>
              </div>
              <div>
                <div className="mb-2">
                  Top Level Domain: {countries[0].topLevelDomain}
                </div>
                <div className="mb-2">
                  Currencies:{" "}
                  {countries[0]?.currencies.map((currency) => (
                    <span key={currency.code}>{currency.name}</span>
                  ))}
                </div>
                <div className="mb-2">
                  Languages:{" "}
                  {countries[0].languages
                    .map((language) => ` ${language.name}`)
                    .toString()}
                </div>
              </div>
            </div>
            <div className="mt-25">
              {countries[0]?.borders && (
                <>
                  Border Countries:{" "}
                  {countries[0]?.borders?.map((border) => (
                    <span
                      key={border}
                      className="bg-darkBlue px-3 py-1 rounded mx-1 shadow-2xl  dark:bg-veryLightGray dark:text-veryDarkBlue"
                    >
                      {border}
                    </span>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetailsPage;
