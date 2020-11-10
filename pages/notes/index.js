import React from "react";
import NewNoteButton from "../../src/components/Notes/NewNote/NewNoteButton/NewNoteButton";
import Notes from "../../src/components/Notes/Notes";

const index = ({ notes }) => {
  return (
    <div className="notes-page">
      <NewNoteButton />
      <Notes notes={notes} />
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/notes");
  const notes = await res.json();
  return {
    props: {
      notes,
    },
  };
}
