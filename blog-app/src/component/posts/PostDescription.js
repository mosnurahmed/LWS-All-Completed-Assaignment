import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePosts } from "../../features/updatePost/updatePostSlice";

function PostDescription({ post }) {
  const { id, title, tags, likes, isSaved, description } = post || {};
  const [likeCount, setLikeCount] = useState(likes);
  const [saved, setSaved] = useState(isSaved);
  const dispatch = useDispatch();
  const saveStyle = saved ? "active save-btn" : "save-btn";

  const savedHandler = () => {
    const value = saved;
    setSaved(!saved);
    dispatch(updatePosts({ id, value }));
  };

  const likesHandler = () => {
    setLikeCount((prevLikeCount) => {
      const value = prevLikeCount + 1;
      dispatch(updatePosts({ id, value }));
      console.log(value);
      return prevLikeCount + 1;
    });
  };

  return (
    <div>
      <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
        {title}
      </h1>
      <div className="tags" id="lws-singleTags">
        {tags.map((tag) => (
          <span>{tag} </span>
        ))}
      </div>
      <div className="btn-group">
        <button className="like-btn" id="lws-singleLinks" onClick={likesHandler}>
          <i className="fa-regular fa-thumbs-up"></i> {likeCount}
        </button>

        <button onClick={savedHandler} className={saveStyle} id="lws-singleSavedBtn">
          <i className="fa-regular fa-bookmark"></i> Saved
        </button>
      </div>
      <div className="mt-6">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PostDescription;
