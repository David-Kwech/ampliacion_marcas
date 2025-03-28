var nNum = 30;
console.log("el valor de nNum es "+nNum);

nNum = nNum + 1;
console.log("el valor de nNum es "+nNum);

nNum = nNum +5;
console.log ("el valor de nNum es "+nNum);

nNum = ++ //es lo mismo exactamente nNum +1;
console.log ("el valor de nNum es "+nNum);

nNum = nNum -1;
console .log("el valor de nNum es"+nNum);

nNum-- ; //es lo mismo exactamente nNum = nNum -1;
console .log ("el valor de nNum es"+nNum);

//objeto o registro

let objetoAlumno = {
    nombre: 'Bego'
    cod_alumno: 46735
 };

 console-log(objetoAlumno);
 console.log("el nombre del alumno es "+objetoAlumno.nombre);
 console.log("el codigo del alumno es "+objetoAlumno.cod_alumno);

 //objeto aula

 let objetoAula= {
    nombre: '1 ASIR'
    numero_mesas: 32
    numero_perchas: 15
 };

 console-log (objetoAula);
 console.log("el nombre del alumno es "+objetoAlumno.nombre);
 console.log("el codigo del alumno es "+objetoAlumno.cod_clase);

 //sumar en una variable las mesas mas las perchas

 var mo = objetoAula.numero_mesas + objetoAula.numero_perchas;
 console.log("mo es "+mo);
 