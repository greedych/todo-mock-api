function Post({ id, title, text }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{id}</p>
    </div>
  );
}

export default Post;
