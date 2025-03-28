

let max0por = 3;
var numJugador;
numObjetivo = 12;

/******************** FOR ********************/

for (let i = 0; i < 3; i++) 
{
    numJugador=prompt("Intento nº "+ (i+1)); 
    if (numJugador==numObjetivo) 
    {
        console.log("Enorabuena de la buena");
        break;
    }
}

/******************** WHILE ********************/

let i = 0;
    
while (i < 3) {
    numJugador=prompt("Intento nº "+ (i+1)); 
    if (numJugador==numObjetivo) 
    {
        console.log("Enorabuena de la buena");
        break;
    }
    i++;
}

/******************** FOR SIN BREAK ********************/
let seguir = true;

for (let i = 0; i < 3 && seguir; i++) 
{
     numJugador=prompt("Intento nº "+ (i+1)); 
    if (numJugador==numObjetivo) 
    {
        console.log("Enorabuena de la buena");
        seguir = false;
        i = i + 3; //i+=3; 
     }
}