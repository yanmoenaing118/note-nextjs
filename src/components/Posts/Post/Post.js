import Link from "next/link";

import classes from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <div className={classes.Post__cover}>
        <img
          src={`/images/${props.cover_img}`}
          alt={props.title}
          title={props.title}
        />
      </div>
      <p>{props.title}</p>
      <Link href={`/posts/${props.id}`}>
        <a>Read More &rarr;</a>
      </Link>
    </div>
  );
};

export default Post;
