import React from "react";
import Link from "next/link";
import classes from "./Anchor.module.scss";

const Anchor = (props) => {
  return (
    <Link href={props.href}>
      <a className={classes.Anchor}>{props.children}</a>
    </Link>
  );
};

export default Anchor;
