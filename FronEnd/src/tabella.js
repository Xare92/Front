function caricapaginainiziale(){
    let strpaginainiziale  ='<label for="colonne">Numero di colonne per la tabella </label>';
    strpaginainiziale     +='<br>';
    strpaginainiziale     +='<input type="text" id="colonne" placeholder="inserisci un numero" onchange="attiva()">';
    strpaginainiziale     +='<br>';
    strpaginainiziale     +='<label for="righe">Numero di righe per la tabella </label>';
    strpaginainiziale     +='<br>';
    strpaginainiziale     +='<input type="text" id="righe" placeholder="inserisci un numero" onchange="attiva()">';
    strpaginainiziale     +='<br>';
    strpaginainiziale     +='<br>';
    strpaginainiziale     +='<input type="button" id="idbutton"  value="Genera una tabella" disabled onclick="generateTable()"/>';
    document.getElementById("mainContent").innerHTML = strpaginainiziale;
}
function attiva(){
    let numerorighe = document.getElementById("righe");
    let numerocolonne = document.getElementById("colonne");
    let btndis = document.getElementById("idbutton");
    if (numerorighe.value !="" && numerocolonne.value !="") 
        btndis.disabled = false;
    else
        btndis.disabled = true;
}
function generateTable() {
    // creazione tabella e elemento <tbody>
    const tbl = document.createElement("table");
    tbl.setAttribute("id","idtbl");
    const tblBody = document.createElement("tbody");
    let colonne = document.getElementById("colonne").value;
    let righe = document.getElementById("righe").value;
    console.log(colonne);
    console.log(righe);
   
    // creazione celle
    for (let i = 0; i < righe; i++) {
      // creazione righe
      const row = document.createElement("tr");
  
      for (let j = 0; j < colonne; j++) {
        // Creazione elemento <td> e text node
        const cell = document.createElement("td");
        const cellText = document.createTextNode('Cella');
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // aggiungi righa alla fine della tabella
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1"); 
    }

    
  