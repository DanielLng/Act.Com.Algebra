
// Inicialización de variables
let tarjetasDescubiertas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 16;
let timerInicial = timer;
let tiempoRegresivo = null;

//Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('tiempo');

// Generación de números aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(() => {return Math.random()-0.5})
console.log(numeros);

//Funciones
function contarTiempo(){
    tiempoRegresivo = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} s.`;
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
        }
    }, 1000);
}

function bloquearTarjetas(){
    for(let i = 0; i<15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

// Funcion principal
function descubrir(id){
if(temporizador == false){
    contarTiempo();
    temporizador = true;
}

    tarjetasDescubiertas++;
    console.log(tarjetasDescubiertas);

    if(tarjetasDescubiertas == 1){
        //Mostrar el primer número
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado;

        //Deshabilitar el primer botón
        tarjeta1.disabled = true;
    }else if(tarjetasDescubiertas ==2){
        //Mostrar segundo número
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        //Deshabilitar segundo botón
        tarjeta2.disabled = true;

        //Incrementar movimientos
        movimientos++; 
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            // Encerar contador tarjetar descubiertas
            tarjetasDescubiertas = 0;

            // Aumentar aciertos
            aciertos ++;
            mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos= ${aciertos} 😲`;
                mostrarTiempo.innerHTML = `¡Fantástico!, hiciste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos = ${movimientos} 😎`;
            }
        }else{
            //Mostrar momentaneamente y volver a cubrir
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDescubiertas = 0;                 
            }, 500);
        }

    }
}