/*
const objA = {
    chaveA: 'A'
}
const objB = new Object();
objB.chaveB = 'B';
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB,objA);       //serve para reaproveitar os codigos
Object.setPrototypeOf(objC,objB);       //o pode chamar o objC e acessar as informacoes do objA
console.log(objC.chaveC);
*/

/*
const Calculo = function(var1,var2,resultado = 0){
    this.var1 = var1;
    this.var2 = var2;
    this.resultado = resultado;
};

Calculo.prototype.multiplica = function(numero,numero2){
//usar prototypes para fazer metodos/funcoes fora do obj
    this.resultado = numero *numero2;   
    return 'resultado = '+ this.resultado;
};


const Calculo2 = function(var1,var2,resultado = 0){
    this.var1 = var1;
    this.var2 = var2;
    this.resultado = resultado;
}

const primeiroCalc = new Calculo(2,10);
const segundoCalc = new Calculo2(10,50);
Object.setPrototypeOf(segundoCalc, Calculo.prototype);      //pega a variavel do obj e o obj Calculo
primeiroCalc.multiplica(10,10);
segundoCalc.multiplica(10,50);

console.log(primeiroCalc);
console.log(segundoCalc);

//utra maneira mais simples de prototipar eles
const terceiroCalc = Object.create(Calculo.prototype);     //colocar a classe pai como prototype
terceiroCalc.resultado = 0;
terceiroCalc.multiplica(2,2);
console.log(terceiroCalc);
*/

//---------CONSTRUTOR PAI--------------
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}
//arrawfunction nao funciona aqui 
Produto.prototype.aumento = function(valor){    
    this.preco += valor;
};
Produto.prototype.desconto = function(valor){
    this.preco -= valor
};

//****************construtores filhos************

//------------CONSTRUTOR DA CAMISETA---------------
function Camiseta(nome,preco,cor = 'branca'){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;              //se nao colocar isto o constructor Camiseta fica como produto

Camiseta.prototype.aumento = function(percentual){    
    this.preco = this.preco + (this.preco *(percentual/100));
};

//----------CONSTRUTOR DA CANECA---------------
function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;
    this.estoque = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:false,
        get:function(){
            return estoque;
        },
        set:function(valor){
            if(typeof valor!='number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);        //declara as duas 1 pra pegar do pai Produto e
Caneca.prototype.constructor = Caneca;                      //depois pra setar o nome do construtor

Caneca.prototype.desconto = function(percentual){    
    this.preco = this.preco - (this.preco *(percentual/100));
};



//------------------INICIALIZADOR-------------------
const caneca = new Caneca('copo',10,'plastico',5);
const produto = new Produto('gen',111);
const camiseta = new Camiseta('t-Shirt',7.5,'preta');
caneca.estoque = 100;
caneca.aumento(20);
console.log(produto);
console.log(camiseta);
console.log(caneca);
