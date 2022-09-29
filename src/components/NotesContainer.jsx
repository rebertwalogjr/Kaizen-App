import React from "react";
import Notev2 from "../sm-components/Notev2";
import {useNotes} from "../custom-functions/useNotes";
import DeleteNote from "../custom-functions/DeleteNote";

export default function NotesContainer() {

  const notes = useNotes();

  return (
      <div className="grid-container">
        {[...notes].reverse()?.map((noteItem, index) => {
          return (
            <div className="grid-item" key={index}>
              <Notev2
                key={index}
                id={noteItem.id}
                title={noteItem.title}
                content={noteItem.content}
                date={noteItem.dateCreated}
                onDelete={(id) => DeleteNote(id)}
              />
            </div>
          );
        })}
      </div>
  );
}
