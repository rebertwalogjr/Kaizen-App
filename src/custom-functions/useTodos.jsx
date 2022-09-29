import { useEffect, useState } from "react";
import Axios from "axios";
import { local} from "../links"

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get((local) + "/getTodos").then((response) => {
        setTodos(response.data);
    });
  });

  return todos;
}

export { useTodos };