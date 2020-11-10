import React from "react";
import Note from "./Note/Note";

import classes from "./Notes.module.scss";

const Notes = (props) => {
  return (
    <div className={classes.Notes}>
      {props.notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
};

export default Notes;
