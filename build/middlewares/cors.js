"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cors = void 0;

var cors = function cors(origin) {
  return function (req, res, next) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, PUT, OPTIONS, PATCH, DELETE, POST");
    next();
  };
};

exports.cors = cors;