import { tableDisplay } from "./table-display.js";
import { addRow } from "./search.js";
export var names = [];
export var aadhar = [];
export var date = [];
export var city = [];
export var time = [];
export var date1 = [];
export var labName = [];
export var reportNo = [];
export var gender = [];
export var testResult = [];

document.querySelector("#button").addEventListener("click",tableDisplay);


document.querySelector("#button1").addEventListener("click",addRow);