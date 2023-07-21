import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searching } from "../features/filter/filterSlice";
import logo from "../images/logo.svg";

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchHandle = (e) => {
    setKeyword(() => {
      dispatch(searching(e.target.value));
      return e.target.value;
    });
  };

  return (
    <nav className="container relative py-3">
      <Link to="/">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="flex-1 max-w-xs search-field group">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>

            <input
              type="text"
              placeholder="Search Task"
              className="search-input "
              id="lws-searchTask"
              value={keyword}
              onChange={searchHandle}
            />
          </div>
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
