import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const app = express();
const SERVER_PORT = 5000;

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error occured");
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(SERVER_PORT, () => {
  console.log(`React app launched on port ${SERVER_PORT} `);
});
