import React from "react";
import Layout from "../../src/components/Layout/Layout";
import PostDetail from "../../src/components/Posts/PostDetail/PostDetail";
import { getAllPostsPaths, getAPostById } from "./../../lib/posts";

const post = (props) => {
  return (
    <Layout>
      <PostDetail post={props.post} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostsPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getAPostById(params.slug);
  return {
    props: {
      post: post,
    },
  };
}

export default post;
