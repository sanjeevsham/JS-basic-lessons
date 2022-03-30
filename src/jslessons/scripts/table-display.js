var n = 1;
var x = 0;

export function tableDisplay() {
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
  
    var value1 = NewRow.insertCell(0);
    var value2 = NewRow.insertCell(1);
    var value3 = NewRow.insertCell(2);
    var value4 = NewRow.insertCell(3);
    var value5 = NewRow.insertCell(4);
    var value6 = NewRow.insertCell(5);
    var value7 = NewRow.insertCell(6);
    var value8 = NewRow.insertCell(7);
  
    value1.innerHTML = names[x];
    value2.innerHTML = aadhar[x];
    value3.innerHTML = date[x];
    value4.innerHTML = city[x];
    value5.innerHTML = time[x];
    value6.innerHTML = date1[x];
    value7.innerHTML = labName[x];
    value8.innerHTML = reportNo[x];
  
    n++;
    x++;
  }