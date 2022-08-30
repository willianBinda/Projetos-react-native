
/*
operadores falsos

NaN
'' "" ``
0
null/undefined
*/ 
console.log('willian' && NaN && 10); // verifica do primeiro para o ultimo s tiver algum falso ele retorna o valor falso
console.log('fssdf'&&'dadasd'&& 'carmem'); // se todos forem vdd vai retornar o ultimo pois verifica do primeiro ate o ultimo

function oi(){
    return "oi";
}
const a = '';

console.log(a && oi());
//  || or retorna o primeiro valor verdadeiro que ele encontrar mesmo se depois iver mais verdadeiros
const usu = 'red';
const padrao = usu || "green";
console.log(padrao);