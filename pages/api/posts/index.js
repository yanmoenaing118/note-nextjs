import nc from "next-connect";
import posts from "../../../src/data/posts";

const app = nc();

app.get((req, res) => {
  res.json(posts);
});

export default app;
