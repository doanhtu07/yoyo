import express from "express";
import path from "path";
import { COMMANDS } from "./app/commands.js";

// https://developer.okta.com/blog/2018/11/15/node-express-typescript

const app = express();
const port = 3000;

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
  console.log(`server started at http://localhost:${port}`);
});
