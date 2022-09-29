import { useEffect, useState } from "react";
import Axios from "axios";
import { local} from '../links';

function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Axios.get((local) + "/getNotes").then((response) => {
      setNotes(response.data);
    });
  });

  return notes;
}

export { useNotes };
