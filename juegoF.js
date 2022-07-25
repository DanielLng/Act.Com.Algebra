//Inicialización de variables
let tarjetasDescubiertas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 100;
let timerInicial = timer;
let tiempoRegresivo = null;

let clickAudio = new Audio('./sounds/Click.wav');
let loseAudio = new Audio('./sounds/Lose.mp3');
let rightAudio = new Audio('./sounds/Right.wav');
let victoryAudio = new Audio('./sounds/Victory.mp3');
let wrongAudio = new Audio('./sounds/Wrong.wav');

//Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo');

//Generación de imagenes aleatorios
imagenes = new Array();
imagenes [0] = "./assets/cards2/1.png"
imagenes [1] = "./assets/cards2/2.png"
imagenes [2] = "./assets/cards2/3.png"
imagenes [3] = "./assets/cards2/4.png"
imagenes [4] = "./assets/cards2/5.png"
imagenes [5] = "./assets/cards2/6.png"
imagenes [6] = "./assets/cards2/7.png"
imagenes [7] = "./assets/cards2/8.png"
imagenes [8] = "./assets/cards2/9.png"
imagenes [9] = "./assets/cards2/10.png"
imagenes [10] = "./assets/cards2/11.png"
imagenes [11] = "./assets/cards2/12.png"
imagenes [12] = "./assets/cards2/13.png"
imagenes [13] = "./assets/cards2/14.png"
imagenes [14] = "./assets/cards2/15.png"
imagenes [15] = "./assets/cards2/16.png"

localStorage.setItem("imagenes [0]", imagenes [0])
localStorage.setItem("imagenes [1]", imagenes [1])
localStorage.setItem("imagenes [2]", imagenes [2])
localStorage.setItem("imagenes [3]", imagenes [3])
localStorage.setItem("imagenes [4]", imagenes [4])
localStorage.setItem("imagenes [5]", imagenes [5])
localStorage.setItem("imagenes [6]", imagenes [6])
localStorage.setItem("imagenes [7]", imagenes [7])
localStorage.setItem("imagenes [8]", imagenes [8])
localStorage.setItem("imagenes [9]", imagenes [9])
localStorage.setItem("imagenes [10]", imagenes [10])
localStorage.setItem("imagenes [11]", imagenes [11])
localStorage.setItem("imagenes [12]", imagenes [12])
localStorage.setItem("imagenes [13]", imagenes [13])
localStorage.setItem("imagenes [14]", imagenes [14])
localStorage.setItem("imagenes [15]", imagenes [15])

imagenes = imagenes.sort(() => {return Math.random()-0.5})
console.log(imagenes);

let a1 = localStorage.getItem("imagenes [0]");
console.log(a1)
let a2 = localStorage.getItem("imagenes [1]");
console.log(a2)

let b1 = localStorage.getItem("imagenes [2]");
console.log(b1)
let b2 = localStorage.getItem("imagenes [3]");
console.log(b2)

let c1 = localStorage.getItem("imagenes [4]");
console.log(c1)
let c2 = localStorage.getItem("imagenes [5]");
console.log(c2)

let d1 = localStorage.getItem("imagenes [6]");
console.log(d1)
let d2 = localStorage.getItem("imagenes [7]");
console.log(d2)

let e1 = localStorage.getItem("imagenes [8]");
console.log(e1)
let e2 = localStorage.getItem("imagenes [9]");
console.log(e2)

let f1 = localStorage.getItem("imagenes [10]");
console.log(f1)
let f2 = localStorage.getItem("imagenes [11]");
console.log(f2)

let g1 = localStorage.getItem("imagenes [12]");
console.log(g1)
let g2 = localStorage.getItem("imagenes [13]");
console.log(g2)

let h1 = localStorage.getItem("imagenes [14]");
console.log(h1)
let h2 = localStorage.getItem("imagenes [15]");
console.log(h2)

//Funciones
function contarTiempo(){
    tiempoRegresivo = setInterval(() =>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} s.`;
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
            loseAudio.play();
        }
    },1000);
}

function bloquearTarjetas(){
    for(let i = 0; i < 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="${imagenes[i]}" alt"">`;
        tarjetaBloqueada.disabled = true;
    }
}

//Función principal
function descubrir(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDescubiertas++;
    console.log(tarjetasDescubiertas);

    if(tarjetasDescubiertas == 1){
        //Mostrar la primera tarjeta
        tarjeta1 = document.getElementById(id);
        primerResultado = imagenes[id];
        tarjeta1.innerHTML = `<img src="${primerResultado}" alt"">`
        clickAudio.play();
    
    
    //Deshabilitar el primer botón
        tarjeta1.disabled = true;
    
    }else if(tarjetasDescubiertas == 2){
        //Mostrar segundo número
        tarjeta2 = document.getElementById(id);
        segundoResultado = imagenes[id];
        tarjeta2.innerHTML = `<img src="${segundoResultado}" alt"">`

        //Deshabilitar segundo botón
        tarjeta2.disabled = true;

    //Incrementar movimientos
    movimientos++; 
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    //Primer Par
    if(primerResultado == a1 && segundoResultado == a2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == a2 && segundoResultado == a1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }


    //Segundo Par
    else if(primerResultado == b1 && segundoResultado == b2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == b2 && segundoResultado == b1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }


    //Tercer Par
    else if(primerResultado == c1 && segundoResultado == c2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == c2 && segundoResultado == c1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }


    //Cuarto par
    else if(primerResultado == d1 && segundoResultado == d2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == d2 && segundoResultado == d1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }


    //Quinto Par
    else if(primerResultado == e1 && segundoResultado == e2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == e2 && segundoResultado == e1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }


    //Sexto Par
    else if(primerResultado == f1 && segundoResultado == f2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == f2 && segundoResultado == f1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }


    //Séptimo Par
    else if(primerResultado == g1 && segundoResultado == g2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == g2 && segundoResultado == g1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }

    
    //Octavo Par
    else if(primerResultado == h1 && segundoResultado == h2){

        // Encerar contador tarjetar descubiertas
        tarjetasDescubiertas = 0;
        rightAudio.play()

        // Aumentar aciertos
        aciertos ++;
        mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;

    }else if(primerResultado == h2 && segundoResultado == h1){
                    // Encerar contador tarjetar descubiertas
                    tarjetasDescubiertas = 0;
                    rightAudio.play()
        
                    // Aumentar aciertos
                    aciertos ++;
                    mostrarAciertos.innerHTML =`Aciertos: ${aciertos}`;
    }else{
        wrongAudio.play();
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDescubiertas = 0;
        }, 800);
    }


        if(aciertos == 8){
            victoryAudio.play();
            clearInterval(tiempoRegresivo);
            mostrarAciertos.innerHTML = `Aciertos= ${aciertos}`;
            mostrarTiempo.innerHTML = `¡Fantástico!, hiciste ${timerInicial - timer} segundos`;
            mostrarMovimientos.innerHTML = `Movimientos = ${movimientos}`;
        }}}