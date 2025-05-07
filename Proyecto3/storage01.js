localStorage.setItem('nombre','Movil_de_Raul');
localStorage.setItem('nombre2','Album_de_Brito');

//alert(localStorage.getItem('nombre2'));


let aFrutas = ['Kiwi','Movil_de_Raul','Fruta del dragón'];

localStorage.setItem('arrayFrutas',aFrutas);

localStorage.setItem('arrayFrutas',JSON.stringify(aFrutas));
console.log(aFrutas);


let otrasFrutas = JSON.parse(localStorage.getItem('arrayFrutas'));
console.log(otrasFrutas);



/*Hacemos un boton para guardar claves con valor*/

function init() {

    let miBoton = document.getElementById('miBoton');
    
    miBoton.addEventListener ( 'click', () => {
        let miClave = document.getElementById('miClave').value;
        let miValor = document.getElementById('miValor').value;

        localStorage.setItem(miClave,miValor);
});
}