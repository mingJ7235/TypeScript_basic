"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    constructor(id, task, complete = false //default 로 false를 넣어줌 
    ) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`);
    }
}
exports.default = TodoItem; //외부에서 사용할 수 있도록 exporting 
/**
 * Functions
 *
 * - 람다함수
 */
const add = (n1, n2) => {
    return n1 + n2;
};
function addFun(firstParam, secondParam) {
    console.log(firstParam + secondParam);
}
