import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const day = new Date();
  let currentDay = day.getDay();
  let type = "a weekday";
  let adv = "come on you lazy wake up";

  if (currentDay === 0 || currentDay === 6) {
    type = "weekend";
    adv = "damn, time to sleep";
  } else if ((currentDay = 4)) {
    type = "wednesday";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

// app.get("/", (req, res) => {
//   if (currentDay > 0) {
//     res.send(`<h1>Hello! Today is weekday.</h1>`);
//     if (currentDay === 0 && currentDay === 6) {
//       res.send(`<h1>Hello! Today is weekend.</h1>`);
//     }
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
