import React from "react";
import { useRouter } from "next/router";
import { MdEdit } from "react-icons/md";

import classes from "./Note.module.scss";

const Note = (props) => {
  const router = useRouter();

  const clickHandler = (e) => {
    e.stopPropagation();
    router.push(`/notes/${props.id}`);
  };

  return (
    <div className={classes.Note}>
      <div>
        <h2>Note {props.id}</h2>
        <p>{props.note}</p>
      </div>
      <span onClick={clickHandler}>
        <MdEdit size="22px" color="#777" />
      </span>
    </div>
  );
};

export default Note;
