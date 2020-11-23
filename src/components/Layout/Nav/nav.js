import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { MdLocalLibrary } from "react-icons/md";

import classes from "./nav.module.scss";

const Nav = (props) => {
  const router = useRouter();
  return (
    <header className={classes.Header}>
      <nav className={classes.Nav}>
        <h2 onClick={(e) => router.push("/")}>
          <i>MyNotes</i>
          <span>
            <MdLocalLibrary size="30px" />
          </span>
        </h2>
        <div className={classes.right}>
          <Link href="/posts">blog</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
