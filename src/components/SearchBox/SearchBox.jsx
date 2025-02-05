import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <label htmlFor="filter">Пошук контактів за іменами</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
