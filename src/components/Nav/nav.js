import React from "react";
import { MdLocalLibrary } from "react-icons/md";

import classes from "./nav.module.scss";

const Nav = (props) => {
  return (
    <header className={classes.Header}>
      <nav className={classes.Nav}>
        <h2>
          <i>MyNotes</i>
          <span>
            <MdLocalLibrary size="35px" />
          </span>
        </h2>
        <div className={classes.right}>
          <div>themes</div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
