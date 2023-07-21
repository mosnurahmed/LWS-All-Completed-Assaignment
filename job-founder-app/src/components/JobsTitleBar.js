import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { search, sorting } from "../features/filter/filterSlice";


function JobsTitleBar() {
  
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const searchHandler = (e) => {
    setKeyword((prevKeyword) => {
      dispatch(search(e.target.value));
      return e.target.value;
    });
  };
  const sortHandle = (e) => {
    setSort(() => {
    dispatch(sorting(e.target.value))
    return e.target.value
    });
  };

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            onChange={searchHandler}
            className="search-input"
            id="lws-searchJob"
          />
        </div>
        <select id="lws-sort" name="sort" value={sort} onChange={sortHandle} autocomplete="sort" className="flex-1">
          <option value="Default" selected>
            Default
          </option>
          <option value="Low to High">Salary (Low to High)</option>
          <option value="High to Low">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default JobsTitleBar;
