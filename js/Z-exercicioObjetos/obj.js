/*
const array = [
    {tag:'p',texto:'Frase 1'},
    {tag:'div',texto:'Frase 2'},
    {tag:'footer',texto:'Frase 3'},
    {tag:'section',texto:'Frase 4'}
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for(i=0;i<array.length;i++){
    let {tag,texto} = array[i];         
    const tagCriada = document.createElement(tag);      // cria o elemento tag que é 'p'
    tagCriada.innerText = texto;                        //adiciona o texto 'frase 1' no elemento p 
    div.appendChild(tagCriada);                         // adiciona esse texto dentro da div no documento

}

container.appendChild(div);                             //adiciona a div com tudo dentro no documento da classe container
*/

const array = [
    {tag:'p',texto:'Frase 1'},
    {tag:'div',texto:'Frase 2'},
    {tag:'footer',texto:'Frase 3'},
    {tag:'section',texto:'Frase 4'}
];


const container = document.querySelector('.container');
const div = document.createElement('div');

for(i=0;i<array.length;i++){
    let {tag,texto} = array[i];         
    let tagCriada = document.createElement(tag);                                                                 
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);                        
    
}

container.appendChild(div);   