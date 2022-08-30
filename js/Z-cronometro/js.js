/*
function relogio(){
    function criaHora(segundos){
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'                         //00:00:00
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    let segundos = 0;
    let timer;
    function inicializador(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHora(segundos);
        },1000);
    }
    
    
    document.addEventListener('click',function(e){      // pega o evento do click no document
        const el = e.target;
        if(el.classList.contains('zerar')){             // se o evento click for na classe zerar vai executar
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos=0;
            relogio.classList.remove('pausado');
        }
        if(el.classList.contains('iniciar')){
            clearInterval(timer);
            inicializador();
            relogio.classList.remove('pausado');
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    
    
    })
}
relogio();
*/

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

const criaHora = function(segundos){
    const data = new Date(segundos*1000);               //*1000 milesimos de segundos 
    return data.toLocaleTimeString('pt-BR',{            //localeDataString refere-se a data 12/3/2002
        hour12:false,                                   //localeTimeString refere-se a tempo h/m/s
        timeZone:'GMT'                                  //zera a hora ou seja ex:00:00:00 caso contrario -3:00h
    });
}

let segundos = 0;           //usado let para mudar o valor conforme as funcoes
let timer;

const rodarHora = function(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHora(segundos);
    },1000);
}


document.addEventListener('click',function(e){          
    const event = e.target;
    if(event.classList.contains('iniciar')){
        clearInterval(timer);
        relogio.classList.remove('cor')             // caso esse if for ativado remove essa classe
        rodarHora();
    }
    if(event.classList.contains('pausar')){
        clearInterval(timer);                       //vai pausar e add a class cor 
        relogio.classList.add('cor');
    }
    if(event.classList.contains('zerar')){
        clearInterval(timer);                       //vai parar  e iprimir a hora de baixo,zera os segundos
        relogio.innerHTML = '00:00:00';                     
        segundos=0;
        relogio.classList.remove('cor');
    }
})
