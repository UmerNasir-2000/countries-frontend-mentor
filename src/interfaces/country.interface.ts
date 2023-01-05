import CountryList from "./countries.interface";

interface Country extends CountryList {
  borders: string[];
  subregion: string;
  topLevelDomain: string[];
  nativeName: string;
  currencies: Currency[];
  languages: Language[];
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  name: string;
}

export default Country;
