import nc from "next-connect";
import notes from "./../../../src/data/data";

const app = nc();

app
  .post((req, res) => {
    const note = { ...req.body, id: Date.now() };
    notes.push(note);
    res.json(note);
  })
  .get((req, res) => {
    res.json(notes);
  });

export default app;
