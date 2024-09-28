function insert_Row() {
 var table = document.getElementById("sampleTable");

	var newRow = table.insertRow(1);
	var cell1 = newRow.insertcell(0);
	cell1.innerHTML = "New cell1";
	
	var cell2 = newRow.insertcell(1);
    cell2.innerHTML = "New cell2";
  
}
