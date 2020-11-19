import React from "react";
import Layout from "../../src/components/Layout/Layout";
import NewNoteButton from "../../src/components/Notes/NewNote/NewNoteButton/NewNoteButton";
import Notes from "../../src/components/Notes/Notes";

const index = ({ notes }) => {
  return (
    <Layout>
      <NewNoteButton />
      <Notes notes={notes} />
    </Layout>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch("https://learnnextjs.vercel.app/api/notes");
  const notes = await res.json();
  return {
    props: {
      notes,
    },
  };
}
