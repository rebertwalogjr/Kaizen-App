import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.css";

export default function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title.substring(0, 80)}</h1>
      <p>{props.content.substring(0, 150)}</p>
      <div className="button-container">
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button>
          <EditIcon />
        </button>
      </div>
    </div>
  );
}
