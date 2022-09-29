let palabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];

let tablero = document.getElementById("forca").getContext("2d");

let palabraSecreta="";

//palabra secreta

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()* palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}


function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display ="none";


    escojerPalabraSecreta();
}