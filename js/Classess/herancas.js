class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ja ligado');
            return;
        }
        this.ligado = true;
    }

    desligado(){
        if(!this.ligado){
            console.log(this.nome +' ja desligado' )
            return;
        }
        this.ligado = false;
    }
}
//pode criar novos metodos ou sobreescrever
class SmartPhone extends Dispositivo{
    constructor(nome,cor){  //adiciona os parametros da class pai e mais as novas dessa
    super(nome/*,mais parametros*/ )     //vai chamar os atributos do pai para esta class
    this.cor = cor;
    }

    
};
const s1 = new SmartPhone('ipod','preto');
s1.desligado();
s1.ligar();
console.log(s1);


//METODOS STATICOS NAO TEM ACESSO AS INSTANCIAS QUE SERIAM OS DADOS DA CLASSE/METODO DA CLASSE 
//STATIC SOMA(){}
//TEM QUE USAR A CLASSE PAI PRA CHAMAR ELA 
//ELE SEIA COMO UMA FUNCAO NORMAL COMUM