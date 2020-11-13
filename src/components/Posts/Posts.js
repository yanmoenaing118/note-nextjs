import HeadLinePost from "./HeadLinePost/HeadLinePost";
import Post from "./Post/Post";

import classes from "./Posts.module.scss";

const Posts = (props) => {
  return (
    <>
      <HeadLinePost />
      <div className={classes.Posts}>
        {props.posts.map((p) => {
          return <Post {...p} />;
        })}
      </div>
    </>
  );
};

export default Posts;
