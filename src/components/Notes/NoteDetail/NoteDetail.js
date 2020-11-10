import React, { createRef, useEffect } from "react";

import classes from "./NoteDetail.module.scss";

const NoteDetail = (props) => {
  const myRef = createRef();
  useEffect(() => {
    myRef.current.setAttribute("contenteditable", "true");
  }, []);
  return (
    <div className={classes.NoteDetail} ref={myRef}>
      <h2>Note {props.id}</h2>
      <p>{props.note}</p>
    </div>
  );
};

export default NoteDetail;
