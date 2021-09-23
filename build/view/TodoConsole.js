"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const TodoItem_1 = __importDefault(require("../model/TodoItem"));
const data_1 = __importDefault(require("../data"));
const TodoCollections_1 = __importDefault(require("../service/TodoCollections"));
const Commands_1 = require("../model/Commands");
class TodoConsole {
    constructor() {
        this.showCompleted = true;
        const sampleTodos = data_1.default.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
        this.todoCollection = new TodoCollections_1.default('혜연이랑 해야할것들 :) ', sampleTodos);
    }
    displayTodoList() {
        console.log(`=====${this.todoCollection.userName}=====` +
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`);
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach((item) => item.printDetails());
    }
    promptUser() {
        console.clear();
        this.displayTodoList();
        inquirer
            .prompt({
            type: "list",
            name: "command",
            message: "Choose option",
            choices: Object.values(Commands_1.Commands)
        })
            .then((answers) => {
            // if(answers["command"] !== Commands.Quit) {
            //     this.promptUser();
            // }
            switch (answers["command"]) {
                case Commands_1.Commands.Toggle:
                    this.showCompleted = !this.showCompleted; //상태를 변경해줌 showCompleted의 변경을 여기서 해주는 것임. 
                    this.promptUser();
                    break;
                case Commands_1.Commands.Add:
                    this.promptAdd();
                    break;
                case Commands_1.Commands.Purge:
                    this.todoCollection.removeComplete(); //이미 만들어놓은 완료목록 삭제 
                    this.promptUser();
                    break;
                case Commands_1.Commands.Complete:
                    if (this.todoCollection.getItemCounts().incomplete > 0) { //완료되지 않은 항목이 1개라도 있는 경우
                        this.promptComplete();
                    }
                    else {
                        this.promptUser();
                    }
                    break;
            }
        });
    }
    promptAdd() {
        console.clear();
        inquirer.prompt({
            type: "input",
            name: "add",
            message: "Enter task :"
        })
            .then((answers) => {
            if (answers["add"] !== "") {
                this.todoCollection.addTodo(answers["add"]);
            }
            this.promptUser();
        });
    }
    promptComplete() {
        console.clear();
        inquirer.prompt({
            type: "checkbox",
            name: "complete",
            message: "Mark Tasks Complete",
            choices: this.todoCollection.getTodoItems(this.showCompleted).map((item) => ({
                name: item.task,
                value: item.id,
                checked: item.complete
            }))
        })
            .then((answers) => {
            let completedTasks = answers["complete"]; //Assertion. number의 배열타입으로 단언한다! 라는 의미임. 어서션. 엘리아스가 아니다. TS의 어서션! 
            this.todoCollection.getTodoItems(true).forEach((item) => this.todoCollection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
            this.promptUser();
        });
    }
}
exports.default = TodoConsole;
