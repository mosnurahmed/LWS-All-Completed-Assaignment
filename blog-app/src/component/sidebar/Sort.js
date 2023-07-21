
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlog } from "../../features/blogs/blogSlice";

function Sort() {
  const [sort,setSort] =useState("")

  const dispatch =useDispatch()
  
  useEffect(() =>{
    dispatch(fetchBlog(sort))
  },[dispatch,sort])
  
  
  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select onChange={(e) => setSort(e.target.value)} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
}

export default Sort;
