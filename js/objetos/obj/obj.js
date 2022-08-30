/*

const pessoa1 = {               //mesma coisa que uma biblioteca em python
    nome:'luri',
    sobrenome:'tonha',
    idade:22
};
console.log(pessoa1.nome);


*/


//-------------------------- funcao para cria obj ----------------------


/*


function criaNome(nome, sobrenome,idade){       // cria uma funcao para armazenar os dados 
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaNome('luiz','pedro',55);        // acrescenta os dados 
const pessao2 = criaNome('ana','paula',22);

console.log(pessoa1.nome,pessoa1.sobrenome,`idade ${pessoa1.idade}`);  //chama os dados


*/


///////////////////////////////////////////////////////////////////////////////////////


/*


function criaNome(nome, sobrenome,idade){       // mais abreviado totalmente diferente de python
    return {nome,sobrenome,idade};
}

const pessoa1 = criaNome('luiz','pedro',55);        
const pessao2 = criaNome('ana','paula',22);

console.log(pessoa1.nome,pessoa1.sobrenome,`idade ${pessoa1.idade}`);  


*/


//---------------------- funcao/metodo this em obj -------------------------


/*


const dados = {
    nome:'luiz',
    sobrenome: 'cezar',
    idade: 23,

    fala() {
        console.log(`minha nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
    },

    incremento(){
        this.idade++;  // this esta se referindo ao objeto dados entao nao precisa colocar daados.nome
    }       


};
// somente objeto 

dados.fala();       // funciona da mesma maneira como a funcao com return e com console.log
dados.incremento();
dados.fala();


*/


//-------------------OBJ AVANÇADOS--------------------------


/*


const pessoa = {
    nome:'tt',
    sobrenome: 'cc'
};
console.log(pessoa['nome']);
console.log(pessoa.nome);


*/

/*


const p1 = new Object();        //construtor
p1.nome = 'will';
p1.sobrenome = 'luiz';
p1.idade = 20;
p1.falatu = function(){
    return`opa ${this.nome}`
};
p1.datanasc = function(){
    const novadata = new Date();
    return novadata.getFullYear()-this.idade;
};

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.falatu());
console.log(p1.datanasc());


*/


/*


function Obj(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
   
    Object.freeze(this);    //tudo abaixo disso nao sera considerado nao funciona impossivel
    this.idade = idade;
    
}

const p1 = new Obj('willian','binda',90);
// Object.freeze(p1);                      //impossibilita a alteracao do obj
p1.nome = 'tom';                        //altera o nome do OBJ

console.log(p1);


*/


//igual aos ponteiros em c as duas constantes apontam para o mesmo local
const prod = {nome:'willian',sobrenome:'binda'};
const aval = prod;                              
aval.nome = 'cleber';
console.log(aval);