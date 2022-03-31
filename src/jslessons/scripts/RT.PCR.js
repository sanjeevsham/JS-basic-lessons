var names = [];
var aadhar = [];
var date = [];
var city = [];
var time = [];
var date1 = [];
var labName = [];
var reportNo = [];
var gender = [];
var testResult = [];

var n = 1;
var x = 0;

function getRadioValue(theRadioGroup){
  var element =document.getElementsByName(theRadioGroup);
  for(var i=0,l=element.length;i < l; i++){
    if(element[i].checked){
      return element[i].value
    }
  }
}

document.querySelector("#button").addEventListener("click", function () {
  var AddRown = document.getElementById("table");
  var NewRow = AddRown.insertRow(n);

  names[x] = document.getElementById("first-name").value;
  aadhar[x] = document.getElementById("aadhar-no").value;
  date[x] = document.getElementById("date").value;
  city[x] = document.getElementById("city").value;
  time[x] = document.getElementById("time").value;
  date1[x] = document.getElementById("date-test").value;
  labName[x] = document.getElementById("lab-name").value;
  reportNo[x] = document.getElementById("report-no").value;
  testResult[x] = getRadioValue("result");
  gender[x] = getRadioValue("gender");

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

  value1.innerHTML = names[x];
  value2.innerHTML = aadhar[x];
  value3.innerHTML = date[x];
  value4.innerHTML = city[x];
  value5.innerHTML = time[x];
  value6.innerHTML = date1[x];
  value7.innerHTML = labName[x];
  value8.innerHTML = reportNo[x];
  value9.innerHTML = testResult[x];
  value10.innerHTML = gender[x];

  n++;
  x++;
});

var n1 = 1;
var x1 = 0;

document.querySelector("#button1").addEventListener("click", function () {
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
});