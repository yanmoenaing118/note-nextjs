import { MdSupervisorAccount } from "react-icons/md";

import classes from "./PostDetail.module.scss";

const PostDetail = (props) => {
  const paras = props.post.body.split("\n").map((str) => <p>{str}</p>);
  return (
    <div className={classes.PostDetail}>
      <div>
        <h1>{props.post.title}</h1>
        <span>{props.post.date}</span>
      </div>
      <figure>
        <img src={`/images/${props.post.cover_img}`} alt={props.post.title} />
        <figcaption></figcaption>
      </figure>

      {paras}
      <strong>
        <MdSupervisorAccount />
        <span>{props.post.author}</span>
      </strong>
    </div>
  );
};

export default PostDetail;
