import Image from "next/image";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import classes from "./HeadLinePost.module.scss";

const carouselUI = ({ children, handleClick, position }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Children}>
        {children}
        <div
          className={classes.leftArrow}
          onClick={handleClick}
          data-position={position - 1}
        >
          {"<"}
        </div>
        <div
          className={classes.rightArrow}
          onClick={handleClick}
          data-position={position + 1}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

const Carousel = makeCarousel(carouselUI);
export default function HeadLinePost(props) {
  return (
    <div className={classes.HeadLinePost}>
      <Carousel defaultWait={3000}>
        <Slide right>
          <div className={classes.HeadLineNew}>
            <div className={classes.Background}></div>
            <div className={classes.Title}>
              <h1>Breaking new: General Min Aung Hlaing visits Russia</h1>
            </div>
            <img
              src="/images/image_3.jpg"
              alt="image"
              width="100%"
              height="auto"
            />
          </div>
        </Slide>
        <Slide right>
          <div className={classes.HeadLineNew}>
            <div className={classes.Background}></div>
            <div className={classes.Title}>
              <h1>Breaking new</h1>
            </div>
            <img
              src="/images/image_3.jpg"
              alt="image"
              width="100%"
              height="100%"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  );
}
