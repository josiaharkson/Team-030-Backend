"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _debug = _interopRequireDefault(require("debug"));

var _chalk = _interopRequireDefault(require("chalk"));

var _config = _interopRequireDefault(require("./config"));

var _env = require("./env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();
var port = parseInt(process.env.PORT || "3000");
var log = (0, _debug["default"])("worker");
app = (0, _config["default"])(app);
app.get("/", function (req, res) {
  res.send("Welcome to Agro-Mart!");
});
app.listen(port, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var m;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          log(_chalk["default"].green("Server running on port ".concat(port))); // Connect to MongoDB

          _context.next = 3;
          return _mongoose["default"].connect(_env.Environment.DB[process.env.NODE_ENV], {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
          });

        case 3:
          m = _context.sent;
          if (m) log(_chalk["default"].yellow("Connected to MongoDB"));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var _default = app;
exports["default"] = _default;