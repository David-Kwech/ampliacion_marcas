/*
8. Escribe la funcion que devuelva el lanzamientp de un dado de 10 caras.
*/

function dado10() 
{
   return Math.floor(Math.random() * 10) + 1
};

console.log(dado10());