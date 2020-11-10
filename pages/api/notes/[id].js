import nc from "next-connect";
import notes from "./../../../src/data/data";

const app = nc();

app.get((req, res) => {
  console.log(req);

  const note = notes.find((note) => note.id == req.query.id);
  res.json(note);
});

export default app;
