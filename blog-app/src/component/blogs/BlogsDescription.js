import React from "react";
import { Link } from "react-router-dom";

function BlogsDescription({blog}) {
  const {title, tags,likes,isSaved,createdAt}=blog




  return (
    <div className="p-4">
      <div className="lws-card-header">
        <p className="lws-publishedDate">{createdAt} </p>
        <p className="lws-likeCount">
          <i className="fa-regular fa-thumbs-up"></i>{likes}
        </p>
      </div>
      <Link to={`blogs/${blog.id}`} href="post.html" className="lws-postTitle">
       {title}
      </Link>
      <div className="lws-tags">
      {tags.map(tag => <span>{tag}</span> )}
      </div>

      {isSaved && (<div className="flex gap-2 mt-4">
        <span className="lws-badge active"> Saved </span>
      </div>)}
    </div>
  );
}

export default BlogsDescription;
