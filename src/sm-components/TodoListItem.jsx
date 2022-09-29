import { Fragment, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteTodo from "../custom-functions/DeleteTodo";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import TextField from "@mui/material/TextField";
import UpdateTodo from "../custom-functions/UpdateTodo";
import Checkbox from '@mui/material/Checkbox';

export default function TodoListItem(props) {
  const [liOnHover, setHoverState] = useState(false);
  const [onEditMode, setEditMode] = useState(false);
  const [onDeleteMode, setDeleteMode] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [editTodoBody, setEditTodo] = useState({
    id: props.id,
    title: props.title,
    content: props.content,
    isDone: props.isDone
  });

  const [checkboxStatus, setCheckboxStatus] = useState(props.isDone);

  function handleChange(event) {
    const { name, value } = event.target;
    setEditTodo((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(editTodoBody);
  }

  function handleCheckboxChange() {
    setCheckboxStatus(!checkboxStatus)
  }

  const style = {
    minHeight: "80px",
    textDecoration: !onEditMode && !onDeleteMode && props.isDone ? "line-through" : "none",
  };

  return (
    <ListItem
      sx={ style}
      className="line"
      alignItems="flex-start"
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
      button
      secondaryAction={
        liOnHover &&
        !onDeleteMode &&
        !expanded && (
          <Stack>
            <IconButton
              onClick={() => {
                setEditMode(true);
                setExpanded(true);
              }}
              size="small"
              edge="end"
            >
              <EditIcon />
            </IconButton>
            {!onEditMode && (
              <IconButton
                size="small"
                edge="end"
                onClick={() => setDeleteMode(true)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Stack>
        )
      }
    >
      {!onEditMode && (
        <ListItemText
          sx={{ padding: "10px" }}
          primary={props.title}
          secondary={
            <Fragment>
              {" — " + props.content}
              {onDeleteMode && (
                <Stack direction="row" spacing={2} mt="5px">
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      DeleteTodo(props.id);
                      setDeleteMode(false);
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => setDeleteMode(false)}
                  >
                    Cancel
                  </Button>
                </Stack>
              )}
            </Fragment>
          }
        />
      )}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack spacing={2}>
          <TextField
            className="expand"
            required
            id="outlined-required"
            label="Title"
            name="title"
            onChange={handleChange}
            value={editTodoBody.title}
          />
          <TextField
            className="expand"
            required
            id="outlined-multiline-static"
            multiline
            rows={4}
            label="Content"
            name="content"
            onChange={handleChange}
            value={editTodoBody.content}
          />
        </Stack>
        <Stack
          mt="5px"
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              editTodoBody.isDone = checkboxStatus;
              UpdateTodo(editTodoBody);
              setEditMode(false);
              setExpanded(false);
            }}
          >
            Save
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              setEditMode(false);
              setExpanded(false);
            }}
          >
            Cancel
          </Button>
          {/* <Button onClick={handleChange}>
            {editTodoBody.isDone ? <CheckIcon /> : "Done"}
          </Button> */}
          <Checkbox checked={checkboxStatus} onChange={handleCheckboxChange} />
        </Stack>
      </Collapse>
    </ListItem>
  );
}
