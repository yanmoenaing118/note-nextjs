import React from "react";
import Layout from "../../src/components/Layout/Layout";
import Posts from "../../src/components/Posts/Posts";

const posts = (props) => {
  return (
    <Layout>
      <Posts posts={props.posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/posts`);
  console.log(res);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default posts;
