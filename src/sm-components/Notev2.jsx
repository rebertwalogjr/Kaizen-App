import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import NoteTitle from "./NoteTitle"
import NoteContent from "./NoteContent";
import "./styles.css"

export default function Notev2(props) {
  const [expanded, setExpanded] = useState(false);
  const [onHover, setHover] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const style = {
    minWidth: "100%", 
    minHeight: "100%", 
    maxWidth: "100%", 
    maxHeight: "100%",
    // boxShadow: onHover ? "5px 5px 0px rgba(71, 75, 255, 0.1), -5px -5px 0px rgba(71, 75, 255, 0.1)" : null,
    transform: onHover ? "scale(1.03)" : null
  }

  return (
    <Card sx={style}
    onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleExpandClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={<NoteTitle title={props.title} date={props.date} />}
      />
      <CardContent>
        <NoteContent content={props.content} />
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              props.onDelete(props.id);
            }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => setExpanded(false)}
          >
            Cancel
          </Button>
        </Stack>
      </Collapse>
    </Card>
  );
}
