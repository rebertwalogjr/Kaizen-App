import Axios from "axios";

export default function AddNote(newNote) {
    Axios.post("http://localhost:3001/saveNote", newNote)
    .then((response) => {
        
    })
}
