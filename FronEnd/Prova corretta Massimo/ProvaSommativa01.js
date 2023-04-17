function AbilitaBottone() {
    if (document.form.txtNumeroRighe.value > 0 && document.form.txtNumeroColonne.value > 0)
        document.form.btnCreaTabella.disabled = false;
    else
        document.form.btnCreaTabella.disabled = true;
}
function TableRow(numeroColonne) {
    let htmlString = '<tr>'
        for (let i = 0; i < numeroColonne; i++) { 
            htmlString += '<td> Cella '+ i + '</td>'
        }
        htmlString += '</tr>'
        return htmlString;
}
function TableHeader(numeroColonne) {
    let htmlString = '<tr>'
        for (let i = 0; i < numeroColonne; i++) { 
            htmlString += '<th> Header '+ i + '</th>'
        }
        htmlString += '</tr>'
        return htmlString;
}
function CreaTabella(numeroRighe, numeroColonne) {
    let htmlString = TableHeader(numeroColonne);
    for (let i = 0; i < numeroRighe; i++) {
        htmlString += TableRow(numeroColonne);
    }
    console.log('CreaTabella' + numeroRighe);
    document.getElementById('table').innerHTML = htmlString;
    document.getElementById('table').className = 'Visibile';
    document.getElementById('btnHideTable').textContent = 'Nascondi tabella';
    //document.getElementById('btnHideTable').className = 'Visibile';
    //document.getElementById('btnClearTable').className = 'Visibile';
    document.getElementById('button-area').className = 'Visibile'
    document.getElementById('btnClearTable').className = 'Visibile';
    document.getElementById('btnClearTable').textContent = 'Cancella Tabella'
}

function NascondiTabella() {
    if (document.getElementById('table').className == 'Visibile') {
        document.getElementById('table').className = 'Invisibile'
        document.getElementById('btnHideTable').textContent = 'Mostra tabella';
        document.getElementById('btnClearTable').className = 'Invisibile';
    }
    else {
        document.getElementById('table').className = 'Visibile';
        document.getElementById('btnHideTable').textContent = 'Nascondi tabella';
        document.getElementById('btnClearTable').className = 'Visibile';
    }
}

function CancellaRiempiTabella() {
    let tdList = document.getElementsByTagName("td");

    if (document.getElementById('btnClearTable').textContent == "Cancella Tabella") {
        for (let i = 0; i < tdList.length; i++) {
            tdList[i].innerHTML= "Cancellato";
        }
        document.getElementById('btnClearTable').textContent = 'Riempi Tabella';
    } 
    else {
        for (let i = 0; i < tdList.length; i++) {
            tdList[i].innerHTML= "Riempito";
        }
        document.getElementById('btnClearTable').textContent = 'Cancella Tabella';
    }
}
