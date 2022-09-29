import React from "react";
import "./Main.css";
import TaskContainer from "./TaskContainer";
import PlannerContainer from "./PlannerContainer";
import RemindersContainer from "./RemindersContainer";
import NotesContainer from "./NotesContainer";

export default function Main() {
  return (
    <div className="flex-container">
      <TaskContainer />
      <div className="flex-item flex-item-middle">
        <NotesContainer />
      </div>
      <div className="flex-item flex-item-right">
        <div className="half-box">
          <PlannerContainer />
        </div>
        <div className="half-box">
          <RemindersContainer />
        </div>
      </div>
    </div>
  );
}
