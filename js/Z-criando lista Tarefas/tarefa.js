const tarefas = document.querySelector('.tarefas');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


//1
btn.addEventListener('click',function(){
    if(!input.value) return;                //se nao tiver nada digitado no input ele nao retorna nada
    criaTarefa(input.value);
});


//2
function criaTarefa(textInput){
    const li = criaLi();             //innerHTML retorna tudo 
    li.innerText = textInput;       //innerText retorna somente texto sem tags e spaços add um texto interno 
    tarefas.appendChild(li);
    limpaInput();
    btnApagar(li); 
    salvarTarefas();
}

//3
function criaLi(){
    const li = document.createElement('li');
    return li;
}

//4
function limpaInput(){          //assim que add uma tarefa ele tem que limpar o input e vai receber um 
    input.value = '';           //foco para digitar novamente sem precisar clicar no input novamente
    input.focus();
}

//5
function btnApagar(li){
    li.innerText+=' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';                         //add Apagar dentro do button
    //btnApagar.classList.add('apagar');
    btnApagar.setAttribute('class','apagar');               //add uma class 'aparagr'
    btnApagar.setAttribute('title','botao de apagar');      //add um titulo no botao so de passar o mouse sobre o titulo 'sera botao de apagar'
    li.appendChild(btnApagar);                              //add o botao na li
    
}

//1.1
input.addEventListener('keypress',function(e){         //pega o evento da tecla pressionada                               
    if(e.keyCode === 13){                              
        if(!input.value) return;                       
        criaTarefa(input.value);                        
    }
})


//pegar o evento da tecla pressionada 'keypress'
//keyup = quando pressiona e solta
//keydown = quando quando pressiona a tecla e ela continua pressionada
/*
input.addEventListener('keypress',function(e){       
    console.log(e);                                   //usar esse console para ver o code da tecla
    if(e.keyCode === 13) alert('tecla pressionada'); 
})
*/

//6
document.addEventListener('click',function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();          //remove o pai dessa classe apagar ou seja apaga a li inteira
        salvarTarefas();
    }

});

//7
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaText = tarefa.innerText;                          //esse .trim tira o espaço do array das tarefas entre 'das ' esse espaço
        tarefaText = tarefaText.replace('Apagar','').trim();       //usa-se o nome no botao e nao a classe entre ''
        listaTarefas.push(tarefaText);
    }
    
    const tarefaJhonson = JSON.stringify(listaTarefas);     //trasnforma o array js em uma string no formato JSON
    localStorage.setItem('tarefas', tarefaJhonson);         // deixa salva as tarefas no navegador. Nao exatamanete

}

//apartir daqui vai salvar no navegador mesmo dando f5 nao vai se perder 
 
//8
function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);       //converte de volta para um objeto js. Entao volta a ser um array

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa);
    }
}
addTarefasSalvas();