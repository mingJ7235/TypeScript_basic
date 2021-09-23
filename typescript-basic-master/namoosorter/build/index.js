"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var NumbersColliction_1 = __importDefault(require("./NumbersColliction"));
// const sorter = new NamooSorter([10, -7, 22, 3, 15]);
// console.log(sorter.sort());
// const sorterStr = new NamooSorter('TypeScript');
// console.log(sorterStr.sort());
var numCollection = new NumbersColliction_1.default([10, -7, 55, 3, 21]);
var sorter = new NamooSorter_1.default(numCollection);
sorter.sort();
console.log(sorter.getCollection);
