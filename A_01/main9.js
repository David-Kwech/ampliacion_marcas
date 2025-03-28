

/********************FUNCIONES*********************/

function elDoble (nn) 
{
    return nn + nn;
}


console.log (elDoble(34));
console.log (elDoble(20));
console.log (elDoble(604));
console.log (elDoble(98));
console.log (elDoble(75));
console.log (elDoble(42));


/****************FUNCIONES CON FOR*****************/

for (let i = 0; i < 40; i++) {
    console.log (elDoble(34));
    console.log (elDoble(20));
    console.log (elDoble(604));
    console.log (elDoble(98));
    console.log (elDoble(75));
    console.log (elDoble(42));
    
}


/*************FUNCIONES INCREMENTA EN 3**************/

function incrementa3 (n) {
    return n + 3;
}

for (let i = 0; i < 1; i++){
    console.log(elDoble(34));
    let num2 = incrementa3(6);
    console.log(num2);
    let num3 = incrementa3 (incrementa3(1));
    console.log(num3);
}


/*************FUNCIONES INCREMENTA N****************/

function incrementarN(numero,incremento) {
    return numero + incremento;
}

console.log(incrementarN(15,4)); 

