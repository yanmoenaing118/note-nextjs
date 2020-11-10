import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

import classes from "./NewNoteButton.module.scss";

const NewNoteButton = (porps) => {
  return (
    <div className={classes.NewNoteButton}>
      <span>
        <MdAddCircleOutline size="25px" />
      </span>
      <p>Add a new note</p>
    </div>
  );
};

export default NewNoteButton;
