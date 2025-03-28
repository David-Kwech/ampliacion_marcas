let aNumeroDePie = [12,35,47,48];

//console.log(aNumeroDePie[0]);

//console.log(aNumeroDePie[2]);

for (let index = 0; index < aNumeroDePie.length; index++)
{
    console.log(index + " , " + aNumeroDePie[index]);

    
}

aNumeroDePie.push(38);
console.log("Después");

aNumeroDePie.forEach((valor,indice) =>
{
    console.log(indice+ ": " +valor);
});

let ultimoElemento = aNumeroDePie.pop();

console.log("Después de después");

aNumeroDePie.forEach((valor,indice) =>
{
console.log(indice + ": " + valor);
});

console.log("El ultimo elemento fue " + ultimoElemento);


const aPersonas = ["José","Chema","Pepe","Bartolito","Begoña"];
aPersonas[0] = "Josito";

aPersonas.forEach((valor,indice) =>
{
    console.log(indice + ": " + valor);
});
//intercambiar el valor de la posicion 2 y 3, independientemente de los valores.

console.log("*************************")
let aux;
aux = aPersonas[2];
aPersonas[2] = aPersonas[3];
aPersonas[3] = aux;

aPersonas.forEach((valor,indice) =>
{
    console.log(indice + ": " + valor);
});
console.log(aPersonas);

console.log("*************************************************************");

aPersonas.sort();
console.log(aPersonas);

let aNumeroPotencia2= [32,64,128,16,8,4,2,1];

aNumeroPotencia2.sort(); //orden alfanumerico
console.log(aNumeroPotencia2);

aNumeroPotencia2.sort((a, b) => a - b);
console.log(aNumeroPotencia2); //orden numerico 

let fila1= [1,2];
let fila2= [5,7];

let matriz1 = [fila1,fila2];

let matriz2 = [[1,2],[5,7]];

console.log(matriz1);
console.log(matriz2);

imprimirMatriz(matriz2);


console.log("***************************************");
//incrementar todos los elementos de la matriz en 1

for (let index = 0; index < matriz2.length; index++) {
    const fila = matriz2[index];
    
    for (let i = 0; i < fila.length; i++) {
        fila[i]++;
    }
    
}

imprimirMatriz(matriz2);


console.log("***************************************");
//incrementar todos los elementos de la matriz en 2

for (let index = 0; index < matriz2.length; index++) {
    const fila = matriz2[index];
    
    for (let i = 0; i < fila.length; i++) {
        fila[i] = fila[i] + 2;
    }
    
}

imprimirMatriz(matriz2);

function imprimirMatriz(miMatriz) {

    for (let index = 0; index < matriz2.length; index++) {
        const fila = matriz2[index];
        
        for (let i = 0; i < fila.length; i++) {
            console.log("valor " + fila[i]);
        }
        
    }

}