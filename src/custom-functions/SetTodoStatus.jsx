import Axios from "axios";

export default function SetTodoStatus(obj) {
  Axios.post("http://localhost:3001/setTodoIsDone", { obj }).then((response) => {
    console.log(response);
  });
}