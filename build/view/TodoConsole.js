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
        const sampleTodos = data_1.default.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
        this.todoCollection = new TodoCollections_1.default('My Todo List', sampleTodos);
    }
    displayTodoList() {
        console.log(`=====${this.todoCollection.userName}=====` +
            `(${this.todoCollection.getItemCounts().incomplete} items todo)`);
        this.todoCollection.getTodoItems(true).forEach((item) => item.printDetails());
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
            if (answers["command"] !== Commands_1.Commands.Quit) {
                this.promptUser();
            }
        });
    }
}
exports.default = TodoConsole;
