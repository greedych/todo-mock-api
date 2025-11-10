import { useContext, useEffect, useState } from "react";
import TodoContext from "../../context/todoContext";
import axios from "axios";
import Post from "../post";

function PostList() {
  const { BASE_URL } = useContext(TodoContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responce = await axios.get(`${BASE_URL}posts`);
        setPosts(responce.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPosts();
  }, [BASE_URL]);

  console.log(posts);

  return (
    <div>
      {posts?.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} text={post.text} />
      ))}
    </div>
  );
}

export default PostList;
