import { names, aadhar, date, city, time, date1, labName, reportNo, gender, testResult } from "./elements.js";
var n1 = 1;

export function addRow() {
  var result = document.getElementById("search").value;
  for (var index = 0; index < aadhar.length; index++) {
    if (result === aadhar[index]) {
      var indexValue = index;
    }
  }
  var AddRown = document.getElementById("table1");
  var NewRow = AddRown.insertRow(n1);

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

  value1.innerHTML = names[indexValue];
  value2.innerHTML = aadhar[indexValue];
  value3.innerHTML = date[indexValue];
  value4.innerHTML = city[indexValue];
  value5.innerHTML = time[indexValue];
  value6.innerHTML = date1[indexValue];
  value7.innerHTML = labName[indexValue];
  value8.innerHTML = reportNo[indexValue];
  value9.innerHTML = testResult[indexValue];
  value10.innerHTML = gender[indexValue];

  n1++;
}