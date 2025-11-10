import { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/todoContext";
import axios from "axios";
import Post from "../post";

function PostList() {
  const { posts } = useContext(TodoContext);

  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const responce = await axios.get(BASE_URL);
  //       setPosts(responce.data);
  //       console.log(responce.data);
  //     } catch (e) {
  //       console.error(`Data Error ${e}`);
  //     }
  //   };

  //   fetchPosts();
  // }, [BASE_URL]);

  console.log(posts);

  return (
    <div>
      {posts ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
          />
        ))
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
}

export default PostList;
