/*
function abril(x = 1,y = 4){
    return x+y;
}
console.log(abril());   // se nao tiver nada nos parametros x e y recebem 1 e 4 

const a = function raiz(n){     // oureo modo de fazer uma funcao que esta contida em a
    return n**0.5;
};
console.log(a(4));


const b = u => u ** 0.5;        // outro mode de fazer uma funcao porem so pode se tiver so uma linha de codigo
console.log(b(16));
*/

/* const a = (x,y) => x > y    ?    x    :   y    */ 
//      nom  param    if      true      false


//-------------------funcoes avancadas----------------------


/*
const umDado = function(){                          //armazenei uma funcao em uma constamte
    //segunda a ser executada
    console.log('fala alguma coisa ai :?');         
}

function imprime(funcao){                           //passei um funcao como parametro
    //primeira a ser executada
    console.log('execuntando funcao');
    funcao();                                       //chamei o parametro como funcao
}
//pq ta executando a funcao 1 e depois executando o parametro 
imprime(umDado);                                    //chamei a funcao usando uma constante q tem uma funcao 


//o mais proximo de uma arrowFunction sem parametros
const funcaoArrow = () =>{
    console.log("sou uma arrowFunction");
}
funcaoArrow();


//funcao dentro de um objeto
const obj = {
    falar:function(){
        console.log('fala oi ai mane')
    }
}
obj.falar();

function funcao(){
    console.log(arguments[0]);      //mesmo nao tendo nenhum argumento se colocar arguments ele aceita 
}
funcao(1,2,3,4,6,7,9);

function funcao1(){
    console.log('90');      //agora se nao tiver a palavra arguments ele emprime o que tiver dentro da funcao
}
funcao1(1,2,3,4,6,7,9);

//se tiver mais argumentos do que parametros ele continua a mesma coisa porem salva os index correspondentes 
function funcao2(a,b,c){
    console.log('90',a,b,c);      
}
funcao2(1,2,3,4,6,7,9);

//se tiver menos argumentos e mais parametros ele funciona porem atribui undefined 
function funcao3(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);      
}
funcao3(1,2,3);

function funcao4(a=0,b=0,c=0){      //se nao tiver argumento para eles, eles assumem o valor padrao 0
    console.log(a+b+c);
}
funcao4(2,10);

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n*multiplicador;
    };
}

const duplica = criaMultiplicador(2);       //a funcao duplica esta recebendo uma funcao
const triplica = criaMultiplicador(3);      
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));            // e aqui a funcao duplica esta retornando a operacao
console.log(triplica(3));
console.log(quadriplica(4));

*/


//----------------------callback------------------


/*
function rand(min= 1000,max=3000){
    const num = Math.random() *(max-min) +min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function (){
        console.log('f2');
        if (callback)callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1callback);

function f1callback(){
    f2(f2callback);
}

function f2callback(){
    f3(f3callback);
}

function f3callback(){
    console.log('ola mundo');
}

*/


//-----------------------funcoes alto invocadas------------------------------


//so pode declarar echamar dentro da funcao anonima 

/*
let idade = 19;
(function(){
    idade = 20
    console.log(idade);
    const a = (idade)=>idade!=NaN?'verdadeiro':'falso';
    console.log(a());



})();        //aqui vao os parametros da funcao anonima 

*/


//-----------Factory Functions------------------


//funcoes que retornam objetos


/*
function criaPessoa(nome,sobrenome,peso,altura,idade){
    return {
        nome,
        sobrenome,
        idade,
        peso,
        altura,
        fala:function (assunto){
            return `${this.nome} esta falando ${assunto}`;      //this = se refere ao objeto
        },
        
        //getter obter o valor
        get imc (){                                             //se torna um atributo do objeto quando usamos get
            const indice = this.peso/(this.altura **2);
            return indice.toFixed(2);
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }


    };
}

const p1 = criaPessoa('willian','binda',58,1.76,20);
p1.nomeCompleto = 'cleiton da silva jorge';
console.log(p1.nome);
console.log(p1.sobrenome);

*/

//-----------------funcao construtora--------------------



function Pessoa(nome,sobrenome){

//usa-se ; e nao , nas constructor function ou classes

    //atributos e metodos privados
    //so existe dentro da Pessoa nao pode ser chamada de fora 
    const ID = 123333245;
    const medotoPr = function (){
    };


    //publica
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome, ":sou um metodo");
    }

}
const p1 = new Pessoa('willian','binda');           //new cria um novo objeto vazio e o this vai apontar para o objeto vazio
const p2 = new Pessoa('bartolomew','binda');
console.log(p1.nome);
p1.metodo();                                        