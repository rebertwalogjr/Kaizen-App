import Axios from "axios";

export default function DeleteNote(id) {
  Axios.post("http://localhost:3001/deleteNote", { id }).then((response) => {
    
  });
}
