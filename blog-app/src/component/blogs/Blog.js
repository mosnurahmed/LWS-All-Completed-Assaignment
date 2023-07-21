import React from "react";
import { Link } from "react-router-dom";
import BlogsDescription from "./BlogsDescription";

function Blog({ blog }) {
  return (
    <div className="lws-card">
      <Link to={`blogs/${blog.id}`} >
        <img src={blog.image} className="lws-card-image" alt="" />
      </Link>
      <BlogsDescription blog={blog} />
    </div>
  );
}

export default Blog;
