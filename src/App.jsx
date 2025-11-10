import { useEffect, useState } from "react";
import "./App.css";
import PostForm from "./components/postForm";
import PostList from "./components/postList";
import TodoContext from "./context/todoContext";
import axios from "axios";

const BASE_URL = "https://691226bb52a60f10c820ce16.mockapi.io/posts";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responce = await axios.get(BASE_URL);
        setPosts(responce.data);
        console.log(responce.data);
      } catch (e) {
        console.error(`Data Error ${e}`);
      }
    };

    fetchPosts();
  }, []);

  return (
    <TodoContext.Provider value={{ posts, BASE_URL }}>
      <PostList />
      <PostForm />
    </TodoContext.Provider>
  );
}

export default App;
