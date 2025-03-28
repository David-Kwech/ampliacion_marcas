// Introducción
alert("Hola. Bienvenido a las pruebas de Asmerix");

// Nivel 1: Dados
let nivel = 1;
let dado1 = Math.floor(Math.random() * 12) + 1;
alert("El primer dado es " + dado1);

let dado2 = Math.floor(Math.random() * 12) + 1;
alert("El segundo dado es " + dado2);

let resultado_1 = dado1 + dado2;
alert("El resultado de los dos dados es " + resultado_1);

if (resultado_1 > 15) {
    alert("Pasas al siguiente nivel");
} else {
    alert("Dedicate a otra cosa");
    alert("No tienes suerte. Yo que tu ni lo intentaba...");
    location.reload();  // Esto refresca la página y detiene la ejecución actual
    exit;  // Usamos return para salir de la ejecución del script
}

// Nivel 2: Número oculto 
let numero_adivinado = Math.floor(Math.random() * 5) + 1;  // Ajuste el rango del número a adivinar (1 a 5)
for (let i = 2; i >= 0; i--) {
    let respuesta = prompt("Ahora tienes que adivinar el numero, del 1 al 5");
    
    if (parseInt(respuesta) == numero_adivinado) {
        alert("Has ganado");
        alert("Pasas al nivel 3");
        break;  // Si acierta, se rompe el bucle y pasa al siguiente nivel
    } else {
        alert("Te quedan " + i + " intentos");
        if (i == 0) {
            alert("Has perdido");
            alert("Eres malill@ ehh. Queee pena... :,(");
            location.reload();  // Esto refresca la página y detiene la ejecución actual
            exit;  // Usamos return para evitar que se ejecute más código
        }
    }
}


// Nivel 3: Clave binaria (Adivina el número entre 0 y 7)
// Función para generar una clave binaria de 3 bits
function generarClaveBinaria() {
    // Generar un número aleatorio entre 0 y 7 (3 bits posibles)
    let claveDecimal = Math.floor(Math.random() * 8);  // Genera un número entre 0 y 7
    // Convertir ese número a binario de 3 bits
    let claveBinaria = claveDecimal.toString(2).padStart(3, '0');  // Convierte a binario y completa con ceros a la izquierda si es necesario
    return {claveBinaria, claveDecimal};
}

// Generar la clave binaria aleatoria
let {claveBinaria, claveDecimal} = generarClaveBinaria();

let intentosClave = 3;  // El jugador tiene 3 intentos

// Mostrar la clave binaria en el prompt, pero el jugador tiene que adivinar el número decimal
for (let i = 1; i <= intentosClave; i++) {  // Comienza desde el intento 1
    // Calcula los intentos restantes (intentosClave - i + 1 para mostrar 3, 2, 1)
    let intentosRestantes = intentosClave - (i - 1);
    
    // Pedimos al jugador que adivine el número decimal correspondiente a la clave binaria
    let respuestaClave = prompt("Adivina el numero correspondiente a la clave binaria. Te quedan " + intentosRestantes + " intentos.");
    
    // Comprobamos si la respuesta es correcta
    if (parseInt(respuestaClave) == claveBinaria) {
        alert("Has adivinado la clave correctamente.");
        alert("Eres buenecillo, pero nada del otro mundo...");
        break;  // Si acierta, el juego termina o pasa al siguiente nivel
    } else {
        if (i == intentosClave) {
            alert("Eres grande, pero esta vez no pudo ser. La clave binaria era: " + claveBinaria + " y el número era: " + claveDecimal);
            location.reload();  // Recarga la página si el jugador ha fallado
            exit;
        }
    }
}


// Nivel Extra: Calcula el código binario de tres bits que te ponen.
function generarClaveBinaria2() {
    // Generar un número aleatorio entre 0 y 7 (3 bits posibles)
    let claveDecimal2 = Math.floor(Math.random() * 8);  // Genera un número entre 0 y 7
    // Convertir ese número a binario de 3 bits
    let claveBinaria2 = claveDecimal2.toString(2).padStart(3, '0');  // Convierte a binario y completa con ceros a la izquierda si es necesario
    return {claveBinaria2, claveDecimal2};
}

// Generar la clave binaria aleatoria
let {claveBinaria2, claveDecimal2} = generarClaveBinaria2();

let intentosClave2 = 3;  // El jugador tiene 3 intentos

// Mostrar la clave binaria en el prompt, pero el jugador tiene que adivinar el número decimal
for (let i = 1; i <= intentosClave2; i++) {  // Comienza desde el intento 1
    // Calcula los intentos restantes (intentosClave2 - i + 1 para mostrar 3, 2, 1)
    let intentosRestantes2 = intentosClave2 - i;  // Corrige el cálculo de intentos restantes
    
    // Pedimos al jugador que adivine el número decimal correspondiente a la clave binaria
    let respuestaClave2 = prompt("Nivel ¡¡EXTRA!! Calcula el número correspondiente a la clave binaria: " + claveBinaria2 + ". Te quedan " + intentosRestantes2 + " intentos.");
    
    // Verificar si el jugador ingresa un valor y si es correcto
    if (respuestaClave2 !== null && parseInt(respuestaClave2) === claveDecimal2) {
        alert("Has adivinado la clave correctamente.");
        alert("Eres buenecillo, pero nada del otro mundo...");
        break;  // Si acierta, el juego termina o pasa al siguiente nivel
    } else {
        if (i === intentosClave2) {
            alert("Eres grande, pero esta vez no pudo ser. La clave binaria era: " + claveBinaria2 + " y el número era: " + claveDecimal2);
            location.reload();  // Recarga la página si el jugador ha fallado
            exit;
        }
    }
}


// Nivel 4: BOOS FINAL

// Obtener la fecha actual y la fecha de Navidad (25 de diciembre)
let fechaActual = new Date();
let fechaNavidad = new Date(fechaActual.getFullYear(), 11, 25); // Año actual, mes 11 (diciembre), día 25

// Calcular los días restantes hasta Navidad
let diasRestantes = Math.ceil((fechaNavidad - fechaActual) / (1000 * 60 * 60 * 24)); // Diferencia en días

// Preguntar al usuario cuántos días faltan para Navidad
let respuestaNavidad = prompt("¿Cuántos días faltan para Navidad?");

if (parseInt(respuestaNavidad) === diasRestantes) {
    alert("¡Has ganado!");
    
    // Si la respuesta es correcta, mostramos fuegos artificiales
    Swal.fire({
        title: '¡ERES GRANDE!',
        imageUrl: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExczZwczZuMGVmbGV5d2Q5MmE5emdwMzNlN2NtYXB0ODVvejl0encxOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5jT0jaNDsM6Ik7X9yq/giphy.gif', // URL del GIF como fondo
        imageWidth: '100%',
        imageHeight: '100%',
        showConfirmButton: false,  // Ocultamos el botón de confirmación
        background: 'rgba(0, 0, 0, 0.5)',  // Fondo ligeramente oscuro para resaltar el contenido dentro
        customClass: {
            title: 'custom-title'  // Aplica la clase personalizada al título
        },
        timer: 5000  // Duración (en milisegundos) antes de que se cierre automáticamente
    }).then(() => {
        // Una vez que el primer SweetAlert termina, ejecutamos el segundo
        // Se inicia el segundo SweetAlert con un GIF de explosión como fondo
        Swal.fire({       
            imageUrl: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3owdW1uMWJ6cGNobWFyYTkzaXc2M2dtejZsODd6cW05MnZqb2c5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LrmU6jXIjwziE/giphy.gif',  // Segundo GIF de explosión
            imageWidth: '100%',
            imageHeight: '100%',
            showConfirmButton: false,
            background: 'rgba(0, 0, 0, 0.5)',  // Fondo oscuro para mejorar visibilidad
        });
});
} else {
    alert("Vaya pringa, tanto para nada...");
}
