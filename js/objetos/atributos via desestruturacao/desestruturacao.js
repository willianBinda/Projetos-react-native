//---------------------------atribuicao via desestruturacao---------------------------
/*
const pessoas={
    nome:'willian',
    idade:20,
    endereco:{
        rua:'ari Loto',
        numero:223
    }
};
console.log(pessoas.endereco.numero);


const {nome='sem nome',idade} = pessoas;        //caso nao tenha nada no primeiro objeto ele coloca  q esta escrito ai 
console.log(nome,idade);

*/



/*
const pessoas={
    nome:'willian',
    idade:20,
    endereco:{
        rua:'ari Loto',
        numero:223
    }
};

//atribuicao via desestruturacao;
const {endereco:{rua:r=13231,numero}} = pessoas;       //no endereco cria a variavel rua 'as' r e printa r que vai da o valor de rua do objeto  
console.log(r);

*/

/*
const pessoas={
    nome:'willian',
    idade:20,
    endereco:{
        rua:'ari Loto',
        numero:223
    }
};

//atribuicao via desestruturacao;

const {nome,...resto} = pessoas;       
console.log(nome,resto);
*/


/*
const obj = {
    nome:'craudio',
    sobrenome:'car',
    idade:90
};

console.log(obj['nome']);

*/