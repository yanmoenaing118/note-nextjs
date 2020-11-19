import nc from "next-connect";
import posts from "./../../../src/data/posts";

const app = nc();

app.get((req, res) => {
  console.log(req.query);
  const post = posts.find((post) => post.id == req.query.slug);
  res.json(JSON.stringify(post));
});

export default app;
