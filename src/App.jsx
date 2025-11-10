import "./App.css";
import PostList from "./components/postList";
import TodoContext from "./context/todoContext";

const BASE_URL = "https://691226bb52a60f10c820ce16.mockapi.io/";

function App() {
  return (
    <TodoContext.Provider value={{ BASE_URL }}>
      <PostList />
    </TodoContext.Provider>
  );
}

export default App;
