import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import TodoListItem from "../sm-components/TodoListItem";
import { useTodos } from "../custom-functions/useTodos";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function TaskContainer() {
  const todos = useTodos();

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div className="flex-item flex-item-left">
      <div className="panel box-neu">
        <h1 className="title-heading"><FormatListBulletedIcon className="icon"/>Todo</h1>
        <div className="task-panel">
          <List sx={style} component="nav" aria-label="mailbox folders">
            {[...todos].reverse()?.map((todo, index) => {
              return (
                <div key={index}>
                  <Divider />
                  <TodoListItem 
                  key={index} 
                  title={todo.title} 
                  content={todo.content} 
                  date={todo.dateCreated}
                  id={todo.id}
                  isDone={todo.isDone}
                  />
                </div>
              );
            })}
            <Divider />
          </List>
        </div>
      </div>
    </div>
  );
}
