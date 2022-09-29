import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import {uid} from "uid/secure"
import "./styles.css"

export default function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);

  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
    dateCreated: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function expand(){
    if (!isExpanded){
      setExpand(true);
    }
  }

  function submitNote(event) {
    if (note.title === "") {
      alert("Please enter a title");
    } else if (note.content === "") {
      alert("Please provide a content.");
    } else {
      const date = new Date();
      note.id = uid(10);
      note.dateCreated = date;
      props.onAdd(note);
      setNote({
        id : "",
        title: "",
        content: "",
        dateCreated: ""
      });
      setExpand(false);
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}
