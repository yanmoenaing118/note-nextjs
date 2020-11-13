import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <p>Subscribe to our new selectors</p>
      <form>
        <input type="email" name="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;
