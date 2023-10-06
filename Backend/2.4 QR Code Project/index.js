/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import * as fs from "node:fs";
import inquirer from "inquirer";
import qr from "qr-image";
import { url } from "node:inspector";

inquirer
  .prompt([
    {
      name: "url",
      message: "Please type your preferred URL.",
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.log(answers);
    const userAnswer = answers.url;
    var qr_svg = qr.image(userAnswer);
    qr_svg.pipe(fs.createWriteStream("new.png"));
    fs.writeFile("user_url.txt", userAnswer, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
