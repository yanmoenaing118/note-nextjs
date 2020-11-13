import Nav from "./Nav/nav";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
