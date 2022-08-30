/*
function criaCalculadora(){
    return {
        //atributos
        display:document.querySelector('.display'),

        //metodos
        inicia(){
            this.cliquebotoes();
            this.pressionaEnter();
        },

        cliquebotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDispay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDispay(){
            this.display.value = ' ';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1);        comeca do 0 porem como tem -1 ele pega o ultimo da direita pra esquerda entao ele apaga 
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("conta invalida");
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert("conta invalida");
                this.clearDispay(); 
                return;
            }
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode===13){
                    this.realizaConta();
                }
            });
        },

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();

*/


function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = function(){
        this.cliqueBotoes();
        this.cliqueEnter();
    };

    this.cliqueBotoes = function(){
        document.addEventListener('click',function(e){
            const el = e.target;                        //qual elemento que esta sendo clicado
            if(el.classList.contains('btn-num')){
                this.addText(el.innerText); 
                this.display.focus();
            }
            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }
            if(el.classList.contains('btn-clear')){
                this.clear();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
        }.bind(this));          //tira isso aqui e so use arrawFunction
    };

    this.addText = function(valor){
        this.display.value += valor;
    };

    this.apagaUm = function(){
        this.display.value = this.display.value.slice(0,-1);
    };

    this.clear = function(){
        this.display.value = '';
    };

    this.realizaConta = function(){
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert(`(${conta}). Não é uma conta`);
                return;
            }
            this.display.value = conta;
        }catch(error){
            alert(`(${conta}). Não é uma conta`);
            this.clear();
            return;
        } 
    };
    this.cliqueEnter = function(){
        document.addEventListener('keyup',e=>{
            if(e.keyCode === 13){
                this.realizaConta();
            }
        });
    }
}

const calculadora = new Calculadora();
calculadora.inicia();