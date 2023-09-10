#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let treeObj = require('./commands/tree');
let organizeObj = require('./commands/organize');
let helpObj = require('./commands/help');

// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];

switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;``
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 Input Right command");
        break;
}