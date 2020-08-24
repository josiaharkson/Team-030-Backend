const express = require("express");
const logger = require("morgan");
const { cors } = require("../middlewares");

module.exports = (app) => {
 app.use(express.json());
 app.use(express.urlencoded({
  extended: false
 }));
 app.use(logger("dev"));
 app.use(cors("*"));
 return app;
};
