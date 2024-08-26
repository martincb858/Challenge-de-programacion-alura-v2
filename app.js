function encriptar(){
    let texto= document.getElementById("input").value;
    let textoCodificado= texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    let parrafo= document.getElementById("parrafo");
    let imagen = document.getElementById('imagen');
    let encriptado= document.getElementById("texto-encriptado");
    let copiar= document.getElementById("copiar");
    let contenedorEncriptado= document.getElementById("encriptado");
    if (document.getElementById("input").value.length != 0){
        if (window.innerWidth <=375 ){
            contenedorEncriptado.style.height="100%"
        }
        if (window.innerWidth <=768 ){
            contenedorEncriptado.style.height="30%"
        }
        imagen.classList.remove("imagen");
        imagen.classList.add("oculta");
        encriptado.style.top= "4%";
        parrafo.style.fontSize= "24px";
        parrafo.style.textAlign= "start";
        asignarTextoElemento("titulo-encriptado", " ");
        asignarTextoElemento("parrafo", textoCodificado);
        copiar.removeAttribute("disabled");
        copiar.textContent=  "Copiar";
    }
    else{
        if (window.innerWidth <=375 ){
            contenedorEncriptado.style.height="20%"
        }
        if (window.innerWidth <=768 ){
           contenedorEncriptado.style.height="10%"
        }
        imagen.classList.remove("oculta");
        imagen.classList.add("imagen");
        encriptado.style.top= "20%";
        parrafo.style.fontSize= "16px";
        parrafo.style.textAlign= "center";
        asignarTextoElemento("titulo-encriptado", "Ningun mensaje fue encontrado");
        asignarTextoElemento("parrafo", "Ingresa el texto que desees encriptar o desencriptar");
        copiar.setAttribute('disabled', true);
    }
    return;
}

function desencriptar(){
    let texto= document.getElementById("input").value;
    let textoCodificado= texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    let parrafo= document.getElementById("parrafo");
    let imagen = document.getElementById('imagen');
    let encriptado= document.getElementById("texto-encriptado");
    let copiar= document.getElementById("copiar");
    let contenedorEncriptado= document.getElementById("encriptado")
    if (document.getElementById("input").value.length != 0){
        if (window.innerWidth <=375 ){
            contenedorEncriptado.style.height="50%"
        }
        if (window.innerWidth <=768 ){
            contenedorEncriptado.style.height="30%"
        }
        imagen.classList.remove("imagen");
        imagen.classList.add("oculta");
        encriptado.style.top= "4%";
        parrafo.style.fontSize= "24px";
        parrafo.style.textAlign= "start";
        asignarTextoElemento("titulo-encriptado", " ");
        asignarTextoElemento("parrafo", textoCodificado);
        copiar.removeAttribute("disabled");
        copiar.textContent=  "Copiar";

    }
    else{
        if (window.innerWidth <=375 ){
            contenedorEncriptado.style.height="20%"
        }
        if (window.innerWidth <=768 ){
            contenedorEncriptado.style.height="10%"
        }
        imagen.classList.remove("oculta");
        imagen.classList.add("imagen");
        encriptado.style.top= "20%";
        parrafo.style.fontSize= "16px";
        parrafo.style.textAlign= "center";
        asignarTextoElemento("titulo-encriptado", "Ningun mensaje fue encontrado");
        asignarTextoElemento("parrafo", "Ingresa el texto que desees encriptar o desencriptar");
        copiar.setAttribute('disabled', true);
    }
    return;
}
function asignarTextoElemento(elemento, texto){
    let titulo= document.getElementById(elemento);
    titulo.innerHTML=texto;    
    return;
}

function copiar(){
    let copiado= document.getElementById("parrafo");
    let boton = document.getElementById("copiar");
    navigator.clipboard.writeText(copiado.textContent);
    boton.textContent= "Copiado";
    return;
}