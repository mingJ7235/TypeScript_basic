"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var sorter = new NamooSorter_1.default([10, -7, 22, 3, 15]);
console.log(sorter.sort());
var sorterStr = new NamooSorter_1.default('TypeScript');
console.log(sorterStr.sort());
