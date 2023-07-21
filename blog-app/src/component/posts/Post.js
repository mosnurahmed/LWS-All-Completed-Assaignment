import PostDescription from "./PostDescription";

function Post({ post }) {
  return (
    <main className="post">
      <img src={post.image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <PostDescription post={post} key ={post.id} />
    </main>
  );
}

export default Post;
