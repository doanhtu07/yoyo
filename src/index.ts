import express from "express";
import path from "path";
import { COMMANDS } from "./app/commands.js";
import cron from "cron";
import axios from "axios";

// https://developer.okta.com/blog/2018/11/15/node-express-typescript

const app = express();
const port = process.env.PORT || 3000;

const CronJob = cron.CronJob;
const pingHerokuServer = new CronJob("0 */10 * * * *", function () {
  console.log("Ping at: ", new Date().toString());
  axios
    .get("https://yoyo-shortcut.herokuapp.com/")
    .then(() => {
      console.log("Successfully ping!");
    })
    .catch((err) => {
      console.error(new Error(String(err)));
    });
});
// That means we are on a server
if (port !== 3000) {
  pingHerokuServer.start();
}

// Static files served inside HTML
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  "/jquery",
  express.static(path.join(__dirname, "../node_modules/jquery/dist/"))
);
app.use("/app", express.static(path.join(__dirname, "app")));

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));

  let command = req.query["shortcut"] ?? "";
  if (typeof command !== "string") {
    command = "";
  }

  if (COMMANDS[command] != undefined) {
    const pack = COMMANDS[command];
    res.redirect(pack.link);
  }
});

// start the express server
app.listen(port, () => {
  console.log(`Server started at port ${port}.`);
});
