import express, { raw } from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hi</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About me</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
