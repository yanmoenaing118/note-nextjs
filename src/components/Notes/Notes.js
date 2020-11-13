import Fade from "react-reveal/Fade";
import Note from "./Note/Note";

import classes from "./Notes.module.scss";

const Notes = (props) => {
  return (
    <div className={classes.Notes}>
      {props.notes.map((note) => (
        <Fade bottom>
          <div className={classes.Note}>
            <Note key={note.id} {...note} />
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Notes;
