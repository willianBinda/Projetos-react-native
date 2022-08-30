// let  nomes;
// nomes = ['willian','tonho','tonha','mario'];
//nomes.push('colega');          //adiciona no final
//nomes.unshift('paulao');      //adiciona no começo
//nomes.pop(nomes);             //remove o ultimo index
//delete nomes[1];
//console.log(nomes.slice(2,4));             //imprime do 2 ate o 3
//console.log(nomes instanceof Array);      //verifica se é um array
//console.log(typeof nomes);

//console.log(nomes);

// ------------------------TROCANDO VARIAVEIS COM ARRAY----------------


/*
//troacndo variaveis
let a = 'a';
let b = 'b';
let c = 'c';
const array = ['c','b','a'];
[a,b,c] = array;
console.log(a,b,c);
let aux ;
aux = c;
b=b;
c=a
a=aux;
console.log(a,b,c);
*/

//----------REST OPERATOR------------

/*
const array = [31231,6453,647967,086675,456,64,423,5645,];
const [primeiro, segundo,...resto] = array;     // printa os dois e depois o resto do array
console.log(primeiro,segundo);
console.log(resto);
*/

//-----------',,' PULADOR DE INDEX-----------

/*
const array = [31231,6453,647967,086675,456,64,423,5645,];
const [primeiro,,terceiro,,quinto] = array; // ',,'  pula um index
console.log(primeiro,terceiro,quinto);
*/

//-------------DESESTRUTURACAO-----------------OU SEI LA---------PENSA UM POUCO AI--------------

/*
const array = [['a','b','c'],['x','y','z'], ['r','t','q']];
const [primeiro,segundo,terceiro] = array;
console.log(primeiro[0]);
*/

//-----------------...REST = COPIA----SLICE---POP---PUSH-----------------

/*

const nomes= ['jao', 'carl','pat'];
const n = [...nomes];                   //usando ...rest ele faz uma copia de nomes entao se alterar somente um deles nao vai afetar os dois
const item = nomes.pop;
console.log(nomes.length);              //sem () pq nao é um metodo
console.log('nomes',nomes,item);
console.log('n',n);
nomes.push('mart');
console.log('add',nomes);
novo = nomes.slice(0,-2);
console.log(novo);


//------------STRING PARA ARRAY---------------------


let name = 'willian bilidin antom';
const tr = name.split(' ');             //transforma em array
console.log(tr);
const y = tr.join(' ');                 //transforma em string
console.log(y);
*/

//-------------------SPLICE------4 EM 1 = POP,PUSH,------------------- 

// const nomes = ['capri','ovin','pe de ciriguela','tonho','jupi'];

// nomes.splice(3,2);                      //remove apartir do index desejado e a quantidade de elementos '(index,qtde)'
// console.log(nomes);

//Number.MAX_VALUE; vai de onde tu quiser ate o infinito

// const nomes = ['capri','ovin','pe de ciriguela','tonho','jupi'];

// nomes.splice(2,2,'marcao');              //se a qqtde tiver o valor '0' ele add o elemento desejado no index desejado
// console.log(nomes);                      //caso contrario ele remove tantos elementos a partir de tal index e add o nome desejado nesse tal index
//                                          //vai remover 1 e add no lugar o nome desejado nome 



//-----------CONCATENACAO ARRAY----------...SPREAD OPERATOR----------


// const a1 = [1,2,3,4,5];
// const a2 = [0,9,8,7];
// const a3 = a1.concat(a2,11,22,33,44,'wiwiwiwiwi');   //juntar dois array
// console.log(a3);
// const a3 = [...a1,'wiwilwiwl',...a2,...[22,33,44]];   //spread operator esparamo
// console.log(a3);


//---------------------FILTRANDO ARRAY-------------------


//filter retorna um novo array filtrado

/*
const number = [12,5435,756,978,3,-9,10,23,45,78,1,7,77];
function callbackfilter(valor){                 //cada index esta passando ai no parametro
    return valor<100;   
}
const filtro = number.filter(callbackfilter);   //essa funcao precisa de um valor true or false e nao precisa 
console.log(filtro);                            //ativar a funcao com () pq o prorpio filter vai fazer isso

*/

/*
const number = [12,5435,756,978,3,-9,10,23,45,78,1,7,77];

const filtro = number.filter(valor => valor<100);

console.log(filtro);

*/

/*
const number = [12,5435,756,978,3,-9,10,23,45,78,1,7,77];

const filtro = number.filter((valor,index,array) =>{        //valor, index de cada valor e array inteiro
    console.log(valor,index,array);
    return valor<100;
});

console.log(filtro);
*/

/*
const array = [
    {nome:'willian',idade:20},
    {nome:'joana',idade:33},
    {nome:'fer',idade:5},
    {nome:'louiz',idade:43},
    {nome:'tuco',idade:21},
];
const tamNome = array.filter(obj => obj.nome.length >3);
const tamIdade = array.filter(obj => obj.idade>20);
const terminaComA = array.filter(obj =>{
    return obj.nome.toLowerCase().endsWith('a');        //passa os nomes para minusculo e depois os que terminam com 'a'
});
console.log(tamNome);
console.log(tamIdade);
console.log(terminaComA);
*/


//------------------MAP----------------


//devolve um novo array como resultado
//ele altera o array,  reescreve

/*
const array = [1,2,3,4,5,6,7,8,9,10];

const dobro = array.map(valor=>valor*2);
console.log(dobro);

*/

/*

const array = [
    {nome:'willian',idade:20},
    {nome:'joana',idade:33},
    {nome:'fer',idade:5},
    {nome:'louiz',idade:43},
    {nome:'tuco',idade:21}
];

*/

/*
const nomes = array.map(obj=>obj.nome);
const str = nomes.join(', ');
console.log(str);
*/


/*
const idades = array.map(obj=>{
    delete obj.nome;
    return obj;
});
console.log(idades);
*/

/*
const addID = array.map((obj,index)=>{
    obj.id = index;
    return obj;
});

console.log(addID);
*/


//---------------REDUCE---------------------

//reduz o array em unico elemento

/*

const array = [1,2,3,4,5,6,7,8,9,10];

const acumulador = array.reduce((acumulador,valor,index,array)=>{
    return acumulador += valor;

},0);                            //valor inicial de index
console.log(acumulador);        //total somado a pos o fim do looping

*/

/*

const array = [
    {nome:'mar',idade:99},
    {nome:'jom',idade:11},
    {nome:'cloide',idade:104},
    {nome:'fivo',idade:53},
    {nome:'tufo',idade:22}
];

const acumulador = array.reduce((acumulador,valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
},0);

console.log(acumulador);

*/

//-------------------------FILTER, MAP, REDUCE--------------------------


/*
const array = [1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99];
*/


/*

const pares = array.filter(function(valor){
    return valor%2===0;
}).map(function(valor){
    return valor*2;
}).reduce(function(ac,valor){
    return ac+valor;
},)

*/


/*

const pares = array
.filter(valor => valor%2===0)
.map(valor =>valor*2)
.reduce((ac,valor) => ac+valor)

console.log(pares);

*/

//---------------------forEACH--------------------

//so funciona com arrays

const a1 = [1,2,3,4,5,6,7,8,9];
let tot = 0;
a1.forEach(valor => tot+=valor);
console.log(tot);