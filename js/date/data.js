/*

const a = 60*60*3*1000;         //60 segundo * 60 segundos * 3h * 1000milesimo de segundo
const data = new Date(0+a);     // para horas basta trocar 3 por 24h
console.log(a);                 // usa o 0 no construtor de datas para zera a data 1970        
console.log(data.toString());

*/
//////////////////////////////////////////////////////////////////////////////
/*

const a = new Date(2023, 3, 20, 5, 30, 27, 1000);
//                  ano-mes-dia-h-min-seg-milesimo

console.log(a.toString());

*/
/////////////////////////////////////////////////////////////////////////////
/*
const a = new Date(1999,5,30);   // se faltar h-min-seg ele imprime 00   e no minimo 2 parametros ano e mes 

//mes começa em 0 igual o index de uma lista 

console.log(a.toString());
*/

/*

const a = new Date(1654018711676);
console.log('Dia',a.getDate());
console.log("Mês",a.getMonth()+1);      //index 0 
console.log("ano",a.getFullYear());
console.log("hora",a.getHours());
console.log("Min",a.getMinutes());
console.log("Segundos",a.getSeconds());
console.log("milisegundos",a.getMilliseconds());
console.log("dia da semana",a.getDay()); // '0' é domingo e '6' é sabado usa index tambem
console.log(a.toString());
console.log(Date.now());  // obtem os milesimos de segundos do marco 0 ate hj se jpgar isso no 
//const a = new Date(1654018711676); ele retorna a data de hj 

*/
function zera(numero){
    return numero<10 ? `0${numero}`: `${numero}`;
}

function passaData(data){
    const dia = zera(data.getDate());
    const mes = zera(data.getMonth() +1);
    const ano = zera(data.getFullYear());
    const hora = zera(data.getHours());
    const min = zera(data.getMinutes());
    const sec = zera(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = passaData(data);
console.log(dataBrasil);
