"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem_1 = __importDefault(require("./lecture02_Annotations/TodoItem"));
/**
 * tsc 명령으로 ts파일을 실행시키면 트랜스컴파일이 되면서 js 파일이 생성된다.
 */
// console.log('hello typescript');
// console.log('test');
var data = [
    { id: 1, task: '장보기', complete: true },
    { id: 2, task: 'TS공부', complete: false },
    { id: 3, task: '데이트', complete: false }
];
console.log('My Todo List');
for (var i = 0; i < data.length; i++) {
    var todoItem = new TodoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}
