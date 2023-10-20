import { useDispatch, useSelector } from "react-redux";
import { filterRegion } from "../services/countrySlice";

function Filter() {
  const filter = useSelector((state) => state.country.filter);
  const dispatch = useDispatch();

  function handleFilter(e) {
    const value = e.target.value;

    dispatch(filterRegion(value));
  }

  return (
    <select
      name="Select Region"
      className=" w-52 cursor-pointer rounded-md bg-cmWhite p-4 text-cmVeryVeryDarkBlue shadow-[0_0_15px_#00000033]  dark:bg-cmDarkBlue dark:text-cmWhite"
      value={filter}
      onChange={handleFilter}
    >
      <option value="All">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
