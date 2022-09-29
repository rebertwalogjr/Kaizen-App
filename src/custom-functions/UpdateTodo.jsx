import Axios from "axios";

export default function UpdateTodo(obj) {
  Axios.post("http://localhost:3001/updateTodo", { obj }).then((response) => {
    console.log(response);
  });
}