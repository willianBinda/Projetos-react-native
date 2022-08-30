//------------defineProperty-----------define properties-------------configuracoes do obj--------------

/*
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque',{
        enumerable: false,   //mostra a chave quando usado for in 
        value: estoque,     //valor da chave
        writable:false,     //pode alterar o valor da chave
        configurable:false  //pode reconfigurar a chave     ou seja ctrl c ctrl v nessa definePropety e reconfigura-la 

    });

*/

/*
    //pode configurar cada chave individualmente

    Object.defineProperties(this, {
        nome:{
            enumerable:true,
            value:nome,
            writable:true,
            configurable:true
        },
        preco:{
            enumerable:true,
            value:nome,
            writable:true,
            configurable:true
        },
        estoque:{
            enumerable:true,
            value:nome,
            writable:true,
            configurable:true
        }
    });

}



const p1 = new Produto('camiseta',20,3);
p1.estoque = 5;
delete p1.estoque;                  //se no configurable estiver como false isso nao funciona
console.log(p1);
console.log(Object.keys(p1));       //se no enumerable estiver como false aqui nao aparece a chave estoque


*/