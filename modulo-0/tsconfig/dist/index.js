"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const core_json_1 = __importDefault(require("./lib/core.json"));
function main() {
    console.log('oi', core_json_1.default.name);
}
exports.main = main;
