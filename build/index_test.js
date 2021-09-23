"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./lecture05_Generic_type/TodoItem"));
const data_1 = __importDefault(require("./data"));
const TodoCollections_1 = __importDefault(require("./lecture05_Generic_type/TodoCollections"));
/**
 * tsc 명령으로 ts파일을 실행시키면 트랜스컴파일이 되면서 js 파일이 생성된다.
 */
// console.log('hello typescript');
// console.log('test');
// const data = [
//     { id : 1, task : '장보기', complete : true},
//     { id : 2, task : 'TS공부', complete : false},
//     { id : 3, task : '데이트', complete : false}
// ];
// console.log('My Todo List');
// for(let i = 0; i < data.length ; i ++) {
//     let todoItem = new TodoItem(data[i].id, data[i].task, data[i]. complete);
//     todoItem.printDetails();
// }
const sampleTodos = data_1.default.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollections_1.default("My Todo List :)", sampleTodos);
myTodoCollection.addTodo("JS 공부하기");
myTodoCollection.addTodo("친구만나기 ");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
//myTodoCollection.removeComplete();
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
console.log("-====================-");
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
