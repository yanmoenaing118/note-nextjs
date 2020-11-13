import classes from "./NewNote.module.scss";

const NewNote = (props) => {
  return (
    <div className={classes.NewNote}>
      <div className={classes.Modal}>
        <div className={classes.ModalTitle}>
          <h2>Add a new note</h2>
          <span>x</span>
        </div>
        <div className={classes.ModalBody}>
          <div className={classes.NewNote_Title}>
            <label>Title:</label>
            <input type="text" name="title" />
          </div>
          <div className={classes.NewNote_Body}>
            <label>Body:</label>
            <textarea className={classes.Textarea}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNote;
