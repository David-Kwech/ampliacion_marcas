/***********************Nivel 1**************************/

const sumaDosDados = Math.floor(Math.random() * 23) +2; //Entre 2 y 24
console.log("Tiras los dados y sacas "+ sumaDosDados);

if (sumaDosDados>15){
    console.log("Enorabuena Nivel 2.");

/***********************Nivel 2**************************/

const numeroOculto = Math.floor(Math.random() * 5); //Entre 1 y 5
let numeroJugador = prompt("Acierta un numero entre 1 y 5, ambos incluidos.");
console.log("NumeroOculto "+ numeroOculto); 
console.log("NumeroJugador "+ numeroJugador);

let ok = false;

if(numeroOculto != numeroJugador){
    numeroJugador = prompt("2º oportunidad, acierta un numero entre 1 y 5, ambos incluidos.");

    if(numeroOculto != numeroJugador){
        console.log("GAME OVER. Eres malill@");
    }
    else{
        ok = true;
    }
}
else {
    ok = true;
}
if (ok){
    console.log("Enorabuena Nivel 3.");

/***********************Nivel 3**************************/
const bit1 = Math.floor(Math.random() * 2); //1 o 0
const bit2 = Math.floor(Math.random() * 2); //1 o 0
const bit3 = Math.floor(Math.random() * 2); //1 o 0
const clave3bits = "" + bit1 + bit2 + bit3;
console.log(clave3bits);
clave3bits = prompt("Adivina el numero de tres digitos binarios.");


}
} 
else {
    console.log("GAME OVER Dedicate a otra cosa.")
}