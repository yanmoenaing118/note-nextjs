import React from "react";
import NoteDetail from "../../src/components/Notes/NoteDetail/NoteDetail";

const note = ({ note }) => {
  return (
    <div className="note-detail-page">
      <NoteDetail {...note} />
    </div>
  );
};

export default note;

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/notes/${params.id}`);
  const note = await res.json();

  return {
    props: {
      note,
    },
  };
}
