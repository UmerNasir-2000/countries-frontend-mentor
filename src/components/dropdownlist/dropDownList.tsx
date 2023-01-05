interface DropDownListProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const DropDownList = ({ setFilter }: DropDownListProps) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  return (
    <select
      className="bg-darkBlue text-textColor hover:darkBlue focus:darkBlue focus:border-blue-500 px-4 py-4 rounded-md active:border-0 mr-12 appearance-none outline-none dark:bg-veryLightGray dark:text-veryDarkBlue shadow-2xl invisible lg:visible"
      onChange={changeHandler}
    >
      <option value="" className="border-0">
        Filter by Region
      </option>
      {regions.map((region) => (
        <option key={region} value={region} className="border-0">
          {region}
        </option>
      ))}
    </select>
  );
};

export default DropDownList;
