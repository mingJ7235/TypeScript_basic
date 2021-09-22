"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    // public id : number; //접근제어자를 줄 수 있다. public, private, protected 사용가능. 
    // public task : string;
    // public complete : boolean;
    function TodoItem(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    TodoItem.prototype.printDetails = function () {
        console.log(this.id + "\t" + this.task + "\t" + (this.complete ? '\t(complete)' : ''));
    };
    return TodoItem;
}());
exports.default = TodoItem; //외부에서 사용할 수 있도록 exporting 
