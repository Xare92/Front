function scriviTAG() {
    let div = document.getElementById("idTAG");
    let strListaTAG = generaTAG('img','chopper.jpg','idchopper','immagine','../img/chopper.jpg');
    strListaTAG += generaTAG('img','download.jpg','iddownload','immagine','../img/download.jpg');
    div.innerHTML = strListaTAG;
}   
function generaTAG(tag,innerText,id,classe,url) {
   let strTAG ="";
   let lowerTAG = tag.toLowerCase();
   switch (lowerTAG) {
    case 'p': 
    case 'h1': 
    case 'h3': 
    case 'span':
        strTAG += '<' + lowerTAG + ' id="'+ id + '" class="'+ classe + '"' + '>' 
        strTAG += innerText;
        strTAG += '</' + lowerTAG + '>';
        console.log(strTAG);
        break;
    case 'a':
    strTAG += '<' + lowerTAG + ' href="' + url + '"' + ' id="'+ id + '" class="'+ classe + '"' + '>'
        strTAG += innerText;
        strTAG += '</' + lowerTAG + '>';
        console.log(strTAG);
        break;    
    case 'img':
        let proprId = '';
        /*
        if(id != '')
            strTAG += '<' + lowerTAG + ' src="' + url + '"' + ' id="'+ id + '" class="'+ classe + '"' + ' alt="' + innerText + '"' +'/>'
        else
            strTAG += '<' + lowerTAG + ' src="' + url + '"' +' class="'+ classe + '"' + ' alt="' + innerText + '"' +'/>'
        */
        if(id != '')
            proprId += 'id="' + id +'"';
        strTAG += '<' + lowerTAG + ' src="' + url + '" ' + proprId + ' class="'+ classe + '"' + ' alt="' + innerText + '"' +'/>'
        console.log(strTAG);
        break;                           
    default:
        break;
   } 
   return strTAG;
}
function insertPElement(){
    //let element = document.createElement('p');
    let testo = document.createTextNode('Ciao');
    let divNode = document.getElementById("idInsertElement");
    divNode.appendChild(testo);
}