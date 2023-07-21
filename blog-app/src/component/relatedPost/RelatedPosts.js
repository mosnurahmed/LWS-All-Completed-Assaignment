import RelatedPost from "./RelatedPost";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Loading from "../ui/Loading";
import { fetchRelatedPost } from "../../features/relatedPost/relatedPostSlice";

function RelatedPosts({ blogId, tags }) {
  const dispatch = useDispatch();

  const { relatedPost, isLoading, isError, error } = useSelector((state) => state.relatedPosts);

  useEffect(() => {
    dispatch(fetchRelatedPost({ tags, blogId }));
  }, [dispatch, tags, blogId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && relatedPost.length === 0) {
    content = <div> No Related Found </div>;
  }
  if (!isLoading && !isError && relatedPost.length > 0) {
    content = relatedPost.map((blog) => <RelatedPost blog={blog} key={blog.id} />);
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
        <div className="space-y-4 related-post-container">{content}</div>
      </h4>
    </aside>
  );
}

export default RelatedPosts;
