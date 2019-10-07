"use strict";
// commonjs
// module.exports = '';
// const data = require('./');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// amd
// define();
// require();
const dependency_1 = __importDefault(require("./dependency"));
const dependency_2 = require("./dependency");
const allStuff = __importStar(require("./dependency"));
dependency_1.default('lala');
dependency_2.consoleWrapper('lala', 'hehe');
console.log(allStuff);
