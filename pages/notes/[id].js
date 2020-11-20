import React from "react";
import Layout from "../../src/components/Layout/Layout";
import NoteDetail from "../../src/components/Notes/NoteDetail/NoteDetail";
import { getAllNotesPaths, getANoteById } from "./../../lib/notes";

const note = ({ note }) => {
  return (
    <Layout>
      <NoteDetail {...note} />
    </Layout>
  );
};

export default note;

export async function getStaticPaths() {
  const paths = getAllNotesPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const note = getANoteById(params.id);
  return {
    props: {
      note,
    },
  };
}
