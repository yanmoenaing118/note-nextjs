import React from "react";
import Layout from "../../src/components/Layout/Layout";
import NoteDetail from "../../src/components/Notes/NoteDetail/NoteDetail";

const note = ({ note }) => {
  return (
    <Layout>
      <NoteDetail {...note} />
    </Layout>
  );
};

export default note;

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://learnnextjs.vercel.app/api/notes/${params.id}`
  );
  const note = await res.json();

  return {
    props: {
      note,
    },
  };
}
