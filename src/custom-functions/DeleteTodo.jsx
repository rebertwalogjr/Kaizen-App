import Axios from "axios";

export default function DeleteTodo(id) {
  Axios.post("http://localhost:3001/deleteTodo", { id }).then((response) => {
    
  });
}