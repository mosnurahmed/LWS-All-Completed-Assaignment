import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Back from "../component/Back";
import Post from "../component/posts/Post";
import RelatedPosts from "../component/relatedPost/RelatedPosts";
import Loading from "../component/ui/Loading";
import { fetchPosts } from "../features/post/postSlice";

function PostPage() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { isLoading, isError, error, post } = posts || {};

  useEffect(() => {
    dispatch(fetchPosts(blogId));
  }, [dispatch, blogId]);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && !post?.id) {
    content = <div> No Blog Found </div>;
  }
  if (!isLoading && !isError && post?.id) {
    content = (
      <>
        <Post post={post}  key={post.id} />
        <RelatedPosts blogId={blogId} tags={post.tags} />
      </>
    );
  }

  return (
    <>
      <Back />
      <section className="post-page-container">{content}</section>
    </>
  );
}

export default PostPage;
