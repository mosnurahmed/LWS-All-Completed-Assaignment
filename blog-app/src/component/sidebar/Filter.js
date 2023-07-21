import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../features/blogs/blogSlice";

function Filter() {
  const [status, setStatus] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog(status));
  }, [dispatch, status]);

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            value="all"
            onChange={(e) => setStatus(e.target.value)}
            id="lws-all"
            checked={status === "all"}
            className="radio"
          />
          <label for="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            value="saved"
            onChange={(e) => setStatus(e.target.value)}
            checked={status === "saved"}
            id="lws-saved"
            className="radio"
          />
          <label for="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
