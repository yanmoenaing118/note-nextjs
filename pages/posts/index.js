import React from "react";
import Layout from "../../src/components/Layout/Layout";
import Posts from "../../src/components/Posts/Posts";
import { getAllPosts } from "./../../lib/posts";

const posts = (props) => {
  return (
    <Layout>
      <Posts posts={props.posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default posts;
