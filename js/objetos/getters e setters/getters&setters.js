function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    let valorpriv = estoque
    Object.defineProperty(this,'estoque',{
        enumerable: true,   
        configurable:true,
        get: function(){        //so modifica o valor
            return valorpriv;
        },
        set: function(valor){   //valida o valor
            if(typeof valor !== 'number'){
                console.log('valor errado');
                return;
            }
            valorpriv = valor;
        }


    });
}

const p1 = new Produto('camiseta',20,3);   
p1.estoque = 500;          
console.log(p1.estoque);
