"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Environment = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv["default"].config();

var Environment = function Environment() {
  _classCallCheck(this, Environment);
};

exports.Environment = Environment;

_defineProperty(Environment, "JWT_SECRET", process.env.JWT_SECRET);

_defineProperty(Environment, "DB", {
  development: process.env.MONGO_URI,
  // eslint-disable-next-line max-len
  production: process.env.MONGO_URI,
  // The Heroku ObjectRocket's MongoDB add-on provide this variable at runtime
  test: process.env.MONGO_TEST_URI
});