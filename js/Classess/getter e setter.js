// const _velocidade = Symbol('velocidade');   //para nao alterar a velocidade do programa 
// class Carro{
//     constructor(nome){
//         this.nome = nome;
//         this[_velocidade] = 0
//     }

//     set velocidade(valor){                  //setar a velocidade se der tudo certo ele para para as outras linhas de codigo
//         if(typeof valor !=='number')return;//caso contrario vai retornar a velocidade padrao
//         if(valor>=100||valor<=0)return;
//         this[_velocidade] = valor;
//     }

//     get velocidade(){                   //agora se da um console.log no velocidade ele mostrara o valor padrao
//         return this[_velocidade];
//     }

//     acelerar (){
//         if(this[_velocidade] >=100)return;
//         this[_velocidade]++; 
//     }

//     freiar(){
//         if(this[_velocidade]<=0)return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro('gol');

// for(let i = 1;i<=33;i++){
//     c1.acelerar();
// }
// // c1[_velocidade] = 0;      //se por acaso setarem a velocidade assim ele nao muda a velocidade padrao da classe
// console.log(c1.velocidade);



class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        console.log('get');
        return this.nome + ' '+this.sobrenome;
    }

    set nomeCompleto(valor){        //aqui ele vai setar/modificar os atributos padroes/originais 
        console.log('set ')
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('coco','verde');
p1.nomeCompleto = 'coco verde ambulante';           //aqui manda pro set
console.log(p1.nome);                               //aqui manda pro get
console.log(p1.sobrenome);

//METODOS STATICOS NAO TEM ACESSO AOS DADOS DA CLASSE 
//STATIC SOMA(){}
//TEM QUE USAR A CLASSE PAI PRA CHAMAR ELA 
//ELE SEIA COMO UMA FUNCAO NORMAL COMUM