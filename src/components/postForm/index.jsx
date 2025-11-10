import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import TodoContext from "../../context/todoContext";

function PostForm() {
  const { BASE_URL } = useContext(TodoContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const sendPost = () => {

  // }

  return (
    <form onSubmit={handleSubmit((data) => axios.post(BASE_URL, data))}>
      <input type="text" {...register("title")} placeholder="Title" />
      <input type="text" {...register("text")} placeholder="Text" />
      <button type="submit">Опублиеовать</button>
    </form>
  );
}

export default PostForm;
