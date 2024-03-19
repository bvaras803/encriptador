var botonEncriptar = document.querySelector(".button__encriptar");
var botonDesencriptar = document.querySelector(".button__desencriptar");
var muneco = document.querySelector(".muneco");
var container = document.querySelector(".parrafo");
var resultado = document.querySelector(".text-result");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultar();
    var textBox = recuperarTexto();
    resultado.textContent = encriptarTexto(textBox);
}

function desencriptar() {
    ocultar();
    var textBox = recuperarTexto();
    resultado.textContent = desencriptarTexto(textBox);
}

function recuperarTexto() {
    var textBox = document.querySelector(".text-box");
    return textBox.value;
}

function ocultar() {
    muneco.classList.add("ocultar");
    container.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoFinal = textoFinal + 'ai';
        } else if (texto[i] == 'e') {
            textoFinal = textoFinal + 'enter';
        } else if (texto[i] == 'i') {
            textoFinal = textoFinal + 'imes';
        } else if (texto[i] == 'o') {
            textoFinal = textoFinal + 'ober';
        } else if (texto[i] == 'u') {
            textoFinal = textoFinal + 'ufat';
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            textoFinal = textoFinal + 'a';
            i = i + 1;
        } else if (texto[i] == 'e') {
            textoFinal = textoFinal + 'e';
            i = i + 4;
        } else if (texto[i] == 'i') {
            textoFinal = textoFinal + 'i';
            i = i + 3;
        } else if (texto[i] == 'o') {
            textoFinal = textoFinal + 'o';
            i = i + 3;
        } else if (texto[i] == 'u') {
            textoFinal = textoFinal + 'u';
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return texto;
}


const btnCopy = document.querySelector(".button__copy");
    btnCopy.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".text-result").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})
