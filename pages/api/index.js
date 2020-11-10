import nc from "next-connect";

const handler = nc();

handler.get((req, res) => {
  res.json({ message: "Ok\n" });
});

export default handler;
