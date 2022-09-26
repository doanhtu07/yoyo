import express from "express";
import path from "path";
import { COMMANDS, InfoPack } from "./app/commands.js";
import cron from "cron";
import axios from "axios";

// https://developer.okta.com/blog/2018/11/15/node-express-typescript

const app = express();
const port = process.env.PORT || 3000;

// Set these variables on Heroku
const nodeEnv = process.env.NODE_ENV || "development";
const serverUrl = process.env.SERVER_URL;

if (nodeEnv === "production") {
  const CronJob = cron.CronJob;
  const pingHerokuServer = new CronJob("0 */10 * * * *", function () {
    console.log("Ping at: ", new Date().toString());
    axios
      .get(serverUrl)
      .then(() => {
        console.log("Successfully ping!");
      })
      .catch((err) => {
        console.error(new Error(String(err)));
      });
  });
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
    if (typeof pack === "object") {
      res.redirect(pack.link);
    } else {
      const alternative = pack;
      res.redirect((COMMANDS[alternative] as InfoPack).link);
    }
  }
});

// start the express server
app.listen(port, () => {
  console.log(`Server started at port ${port}.`);
});
