import React from "react";
import "../global.scss";
import Nav from "../src/components/Nav/nav";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div className="main">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
