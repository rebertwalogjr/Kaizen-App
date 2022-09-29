import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { options, style } from "./const-list";
import { Button } from "@mui/material";
import {uid} from "uid/secure"
import AddNote from "../custom-functions/AddNote";
import AddTodo from "../custom-functions/AddTodo"
import "./styles.css"

export default function AddButtonModalv2() {

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("Note");

  const [obj, setObject] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const {value} = event.target;
    setOption(value);
  };

  function handleInputFieldChange(event) {
    const { name, value } = event.target;
    setObject(prevObj => {
      return {
        ...prevObj,
        [name]: value
      };
    });
  }

  function handleOnCLickAdd (typ, newObj){
    const date = new Date();
    const id = uid(10);
    newObj.id = id;
    newObj.dateCreated = date;

    if (typ === "notes"){
      AddNote(newObj);
      handleClose();
    }else if (typ === "todos"){
      newObj.isDone = false;
      AddTodo(newObj);
      handleClose();
    }else if (typ === "reminders"){

    }else if (typ === "schedules"){

    }else{

    }

  }

  return (
    <div className="add-modal-button right">
      <Fab onClick={handleOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={option}
              onChange={handleChange}
              helperText="Select where to add"
            >
              {options.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="container">
            <TextField
              className="expand"
              required
              id="outlined-required"
              label="Title"
              name="title"
              onChange={handleInputFieldChange}
            />
          </div>
          <div className="container">
            <TextField
              className="expand"
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              name="content"
              onChange={handleInputFieldChange}
            />
          </div>
          <div>
            <Button onClick={() => handleOnCLickAdd(option, obj)} variant="contained" endIcon={<AddIcon />}>
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
