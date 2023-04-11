function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let colonne = document.getElementById("colonne").value;
    let righe = document.getElementById("righe").value;
    let Array = [5,6,7,8,9,10];
    console.log(colonne);
    console.log(righe);

    if (colonne == "" && righe == "") {
        window.alert("NON HAI INSERITO ALCUN NUMERO!");
    }
    else {
    // creating all cells
    for (let i = 0; i < righe; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < colonne; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(Array[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    }
}
    
  