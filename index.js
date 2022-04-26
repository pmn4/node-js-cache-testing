const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const { fnPlanDemo } = require("./handlers/plans");

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (_req, res) => res.render("pages/index"))
  .get("/plans", fnPlanDemo)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
