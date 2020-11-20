import React from "react";
import Layout from "../../src/components/Layout/Layout";
import PostDetail from "../../src/components/Posts/PostDetail/PostDetail";

const post = (props) => {
  return (
    <Layout>
      <PostDetail post={props.post} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: post.id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.API_URL}/api/posts/${params.slug}`);
  const post = await res.json();
  return {
    props: {
      post: post,
    },
  };
}

export default post;
