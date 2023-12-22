var rowcnt = 0;
function addrow() {
  rowcnt += 1;
  var table = document.getElementById("myTable");
  var row = table.insertRow(rowcnt);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = prompt("Enter Description of Expense");
  cell2.innerHTML = prompt("Enter Date of Expense");
  cell3.innerHTML = prompt("Enter Amount Spent");
  totalexp();
}

function delrow() {
  var table = document.getElementById("myTable");
  if (rowcnt != 0) {
    var row = table.deleteRow(rowcnt);
    rowcnt -= 1;
  }
  totalexp();
}

function totalexp() {
  var tot = 0;
  var table = document.getElementById("myTable");
  for (var i = 1; i <= rowcnt; i++) {
    tot += parseFloat(table.rows[i].cells[2].textContent);
  }
  document.getElementById("tot").innerHTML = "Total Amount Spent " + tot;
}
