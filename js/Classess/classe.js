class Pessoa {
    constructor(nome,sobrenome){      //funcao da classe
        this.nome = nome;               //atributos da classe
        this.sobrenome = sobrenome;
    }

    falar(){
        return `${this.nome} esta bebendo`;
    }

    
}

const p1 = new Pessoa('willian','binda');
console.log(p1.falar());
const p2 = new Pessoa('rob');
console.log(p2.falar());


//METODOS STATICOS NAO TEM ACESSO AOS DADOS DA CLASSE 
//STATIC SOMA(){}
//TEM QUE USAR A CLASSE PAI PRA CHAMAR ELA 
//ELE SEIA COMO UMA FUNCAO NORMAL COMUM