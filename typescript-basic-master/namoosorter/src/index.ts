import NamooSorter from "./NamooSorter";
import NumbersCollection from './NumbersColliction'

// const sorter = new NamooSorter([10, -7, 22, 3, 15]);

// console.log(sorter.sort());

// const sorterStr = new NamooSorter('TypeScript');
// console.log(sorterStr.sort());

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);

let sorter = new NamooSorter(numCollection);
sorter.sort();
console.log(sorter.getCollection)