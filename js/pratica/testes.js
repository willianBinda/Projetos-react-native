class Memory{

    constructor(){
        this.form = document.querySelector('.label');
        this.getEvento();
    }

    getEvento(){
        document.addEventListener('click',e=>{
            const el = e.target;
            this.resultado(el.innerText);
            if(el.classList.contains('btn')){
                el.
            }
            
        })
    }

    resultado(valorString){
        if(valorString == '1'){
            console.log('acertou')
        } 
    }

    
    





}
const teste = new Memory();