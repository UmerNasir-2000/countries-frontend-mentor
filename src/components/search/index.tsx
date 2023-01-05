import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: SearchProps) => {
  async function searchInputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearch(event?.target.value);
  }

  return (
    <div className="invisible md:visible bg-darkBlue px-4 rounded dark:bg-veryLightGray dark:text-veryDarkBlue shadow-2xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="p-4 appearance-none w-[450px] text-black leading-tight focus:outline-none focus:shadow-outline bg-darkBlue dark:bg-veryLightGray dark:text-veryDarkBlue"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={searchInputHandler}
      />
    </div>
  );
};

export default Search;
