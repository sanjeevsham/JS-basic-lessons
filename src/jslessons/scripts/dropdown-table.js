import { names, aadhar, date, city, time, date1, labName, reportNo, gender, testResult } from "./elements.js";
import { getRadioValue } from "./radiovalue.js";

var n = 1;
var y = 0;

export function tableDisplay() {
  var AddRown = document.getElementById("table");
  var NewRow = AddRown.insertRow(n);

  names[y] = document.getElementById("first-name").value;
  aadhar[y] = document.getElementById("aadhar-no").value;
  date[y] = document.getElementById("date").value;
  city[y] = document.getElementById("city").value;
  time[y] = document.getElementById("time").value;
  date1[y] = document.getElementById("date-test").value;
  labName[y] = document.getElementById("lab-name").value;
  reportNo[y] = document.getElementById("report-no").value;
  testResult[y] = getRadioValue("testresult");
  gender[y] = getRadioValue("gender");

  var value1 = NewRow.insertCell(0);
  var value2 = NewRow.insertCell(1);
  var value3 = NewRow.insertCell(2);
  var value4 = NewRow.insertCell(3);
  var value5 = NewRow.insertCell(4);
  var value6 = NewRow.insertCell(5);
  var value7 = NewRow.insertCell(6);
  var value8 = NewRow.insertCell(7);
  var value9 = NewRow.insertCell(8);
  var value10 = NewRow.insertCell(9);

  value1.innerHTML = names[y];
  value2.innerHTML = aadhar[y];
  value3.innerHTML = date[y];
  value4.innerHTML = city[y];
  value5.innerHTML = time[y];
  value6.innerHTML = date1[y];
  value7.innerHTML = labName[y];
  value8.innerHTML = reportNo[y];
  value9.innerHTML = testResult[y];
  value10.innerHTML = gender[y];

  n++;
  y++;
  }