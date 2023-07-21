import React from "react";
import { Link } from "react-router-dom";


function RelatedPost({blog}) {
  const {title, image, id, tags,createdAt} = blog || {}

  
  return (
    <div className="card">
      <Link to ={`/blogs/${id}`} href="post.html">
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to ={`/blogs/${id}`} href="post.html" className="text-lg post-title lws-RelatedPostTitle">
         {title}
        </Link>
        <div className="mb-0 tags">
          {tags.map(tag => <span> {tag}</span>)}
        </div>
        <p> {createdAt} </p>
      </div>
    </div>
  );
}

export default RelatedPost;
