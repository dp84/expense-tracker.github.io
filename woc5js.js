var rowcnt = 0;

function addrow() {
  rowcnt += 1;
  var table = document.getElementById("myTable");
  var row = table.insertRow(rowcnt);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  
   cell1.innerHTML = prompt("Enter Description of Expense");
   cell2.innerHTML = prompt("Enter Date of Expense in DD-MM-YYYY format");
   cell3.innerHTML = prompt("Enter Amount Spent");

   let button = document.createElement('button');
        button.innerText = 'Delete';  
        button.setAttribute('onclick', 'delrow(this)');
        button.setAttribute("style","background-color:black;text-align: center;color: white;margin-left: auto;margin-right: auto;margin-bottom:10px;width:100px");
        cell4.appendChild(button);

  totalexp();
}

function delrow(r) {

   var table = document.getElementById("myTable");
   var i = r.parentNode.parentNode.rowIndex;
   table.deleteRow(i);
    rowcnt -= 1;
  totalexp();
}

function totalexp() {
  var tot = 0;
  var table = document.getElementById("myTable");
  for (var i = 1; i <= rowcnt; i++) {
    tot += parseFloat(table.rows[i].cells[2].textContent);
  }
  document.getElementById("tot").innerHTML = "Total Money Spent Rs " + tot;
}

