function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}


let aBaraja = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(aBaraja);

let aBarajaMezclada = shuffleArray(aBaraja);

console.log(aBaraja);

// jugador 1
let aJugador1 =  [];
aJugador1.push(aBaraja[0]);
aJugador1.push(aBaraja[4]);
aJugador1.push(aBaraja[8]);
console.log("Mano del jugador 1")
console.log(aJugador1);

// jugador 2
let aJugador2 =  [];
aJugador2.push(aBaraja[1]);
aJugador2.push(aBaraja[5]);
aJugador2.push(aBaraja[9]);
console.log("Mano del jugador 2")
console.log(aJugador2);

// jugador 3
let aJugador3 =  [];
aJugador3.push(aBaraja[2]);
aJugador3.push(aBaraja[6]);
aJugador3.push(aBaraja[10]);
console.log("Mano del jugador 3")
console.log(aJugador3);

// jugador 4
let aJugador4 =  [];
aJugador4.push(aBaraja[3]);
aJugador4.push(aBaraja[7]);
aJugador4.push(aBaraja[11]);
console.log("Mano del jugador 4")
console.log(aJugador4);


let suma1 = 0;
for (let index = 0; index < aJugador1.length; index++) 
{
    suma1 = suma1 + aJugador1[index];
    
}
console.log("calidad de la mano del jugador 1 es " + suma1);

let suma2 = 0;
for (let index = 0; index < aJugador2.length; index++) 
{
    suma2 = suma2 + aJugador2[index];
    
}
console.log("calidad de la mano del jugador 2 es " + suma2);

let suma3 = 0;
for (let index = 0; index < aJugador3.length; index++) 
{
    suma3 = suma3 + aJugador3[index];
    
}
console.log("calidad de la mano del jugador 3 es " + suma3);

let suma4 = 0;
for (let index = 0; index < aJugador4.length; index++) 
{
    suma4 = suma4 + aJugador4[index];
    
}
console.log("calidad de la mano del jugador 4 es " + suma4);


// hacer una funcion calidad 
// decir que jugador vas mejor y que jugador vas peor

function calidad(miArray){

let suma=0;

for (let index = 0; index < miArray.length; index++) 
    {
        suma = suma + calidad[index];  
    }
    return suma;
}

console.log("calidad de la mano juagador 1" + calidad(aJugador1));
console.log("calidad de la mano juagador 2" + calidad(aJugador2));
console.log("calidad de la mano juagador 3" + calidad(aJugador3));
console.log("calidad de la mano juagador 4" + calidad(aJugador4));

let sumaJugador1 = 12;
let sumaJugador2 = 5;
let sumaJugador3 = 6;
let sumaJugador4 = 20;

//decir que jugador va mejor y peor
if (sumaJugador1 > sumaJugador2 && sumaJugador1 > sumaJugador3 && sumaJugador1 > sumaJugador4)
{
    console.log("el jugador 1 va mejor, suma: " + sumaJugador1);
}

else if (sumaJugador2 > sumaJugador1 && sumaJugador2 > sumaJugador3 && sumaJugador2 > sumaJugador4)
{
    console.log("el jugador 2 va mejor, suma: " + sumaJugador2);
}

else if (sumaJugador3 > sumaJugador1 && sumaJugador3 > sumaJugador2 && sumaJugador3 > sumaJugador4)
{
console.log("el jugador 3 va mejor, suma: " + sumaJugador3);
}

else if (sumaJugador4 > sumaJugador1 && sumaJugador4 > sumaJugador2 && sumaJugador4 > sumaJugador3)
{
    console.log("el jugador 4 va mejor, suma: " + sumaJugador4);
}

n1 = 2;
n2 = 3;

//mayor2(n1, n2) //me devuelve el mayor de n1 y n2
//mayor3(n1, n2, n3)
//mayor4(n1, n2, n3, n4)

//mayor de dos numeros
function mayor2(n1, n2) 
{
    if (n1 > n2) return n1;
    else return n2;
}

console.log(mayor2(6,8));

//mayor de tres numeros
function mayor3(n1, n2, n3) 
{
    if ((n1 > n2) && (n1 > n3))
    {
        return n1;
    }
    else if ((n2 > n1) && (n2 > n3))
    { 
        return n2;
    }
    else 
    {
        return n3;
    }
}

console.log(mayor3(6,9999,8));

//mayor de cuatro numeros
function mayor4(n1, n2, n3, n4) 
{
    if ((n1 > n2) && (n1 > n3) && (n1 > n4))
    {
        return n1;
    }
    else if ((n2 > n1) && (n2 > n3) && (n2 > n4))
    { 
        return n2;
    }
    else if (( n3 > n1) && (n3 > n2) && (n3 > n4))
    {
        return n3;
    }
    else 
    {
        return n4;
    }
}

console.log(mayor4(6,88888,8,-80));

//mayor de ocho numeros
function mayor8(n1, n2, n3, n4, n5, n6, n7, n8) 
{
    return mayor2(mayor4(n1, n2, n3, n4), mayor4(n5, n6, n7, n8));  
}


let aNum =  [];

aNum[0] = 9;
aNum[1] = 9999;
aNum[2] = 999;

//mayor de este array

let mayor =  -9999999;

for (let index = 0; index < aNum.length; index++) 
{
    if (aNum(index) > mayor) 
    {
        mayor = aNum(index);
    }
}
