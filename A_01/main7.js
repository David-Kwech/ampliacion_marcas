//numero alearorio entre 1 y 13
let num_aleatorio = Math.floor(Math.random() * 13) + 1;
if (num_aleatorio > 10)
    {
        num_aleatorio=10;
    }

let num_aleatorio2 = Math.floor(Math.random() * 13) + 1;
console.log("Tus cartas son "+ num_aleatorio+ "," +num_aleatorio2);

if (num_aleatorio2 > 10)
{
    num_aleatorio2=10;
}


let palabra= prompt("Carta más (c) o Plantarse (p)");

if (palabra== 'p')
{
    console.log("El jugador se planta");
}
else if (palabra== 'c')
{
    console.log("El jugador continua");
}
else
{
    console.log("Por favor, introduzca: Carta más (c) o Plantarse (p)");
}