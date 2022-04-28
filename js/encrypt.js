var texto = "texto desencriptado";
var chars = {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'};
var unchars = {'ai':'a', 'enter':'e', 'imes':'i', 'ober':'o', 'ufat':'u'};

function activarElementos(texto){
    document.getElementById('noTexto').style.display='none';
    document.getElementById('textoEncriptado').style.display='block';
    document.getElementById('textoEncriptado').innerHTML = texto;
    document.getElementById('textArea').value= null;

    document.getElementById('textoEncriptado').style.background='none';
    document.getElementById('textoEncriptado').style.color='black';
}

function encriptarTexto(){

    var texto = document.getElementById('textArea').value;

    if (texto.length > 0){
        texto = texto.replace(/[aeiou]/g, m => chars[m]);
        activarElementos(texto);
    }
}

function desencriptarTexto(){

    var texto = document.getElementById('textArea').value;

    if (texto.length > 0){
        texto = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        activarElementos(texto);
    }
}

function copiarTexto() {

    var texto = document.getElementById('textoEncriptado');

    var text = document.getElementById('textoEncriptado').innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    document.getElementById('textoEncriptado').style.background='blue';
    document.getElementById('textoEncriptado').style.color='white';
}