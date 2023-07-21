import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../features/blogs/blogSlice";
import Loading from "../ui/Loading";
import Blog from "./Blog";

function Blogs() {
  const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && blogs.length === 0) {
    content = <div> No Blog Found </div>;
  }
  if (!isLoading && !isError && blogs.length > 0) {
    content = blogs.map((blog) => <Blog blog={blog} key={blog.id} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}

export default Blogs;
