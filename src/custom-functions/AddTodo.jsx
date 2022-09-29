import Axios from "axios";

export default function AddNote(newTodo) {
    Axios.post("http://localhost:3001/saveTodo", newTodo)
    .then((response) => {
        
    })
}