import { addRow } from "./search.js";
import { tableDisplay } from "./table-display.js";
var names = [];
var aadhar = [];
var date = [];
var city = [];
var time = [];
var date1 = [];
var labName = [];
var reportNo = [];

document.querySelector("#button").addEventListener("click", tableDisplay);

document.querySelector("#button1").addEventListener("click", addRow);