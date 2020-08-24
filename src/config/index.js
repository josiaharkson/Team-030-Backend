import express from "express";
import logger from "morgan";
import { cors } from "../middlewares";

export default (app) => {
 app.use(express.json());
 app.use(express.urlencoded({
  extended: false
 }));
 app.use(logger("dev"));
 app.use(cors("*"));
 return app;
};
