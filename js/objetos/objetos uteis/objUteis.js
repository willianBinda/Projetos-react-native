/*
//igual aos ponteiros em c as duas constantes apontam para o mesmo local
const prod = {nome:'willian',sobrenome:'binda'};
const aval = prod;                              
aval.nome = 'cleber';
console.log(aval);
*/

const prod = {nome:'willian',sobrenome:'binda'};
//console.log(Object.getOwnPropertyDescriptor(prod,'nome'));  //mostra as config desta chave
//              OU
Object.defineProperty(prod,'nome',{
    writable:false,
    configurable:false
});
console.log(Object.getOwnPropertyDescriptor(prod,'nome'));

Object.entries();   //retorna arrays
Object.values();    //retorna valores