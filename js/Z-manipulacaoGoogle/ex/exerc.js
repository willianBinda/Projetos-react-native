//
let numero = prompt('Digite um numero:');  // prompt retorna uma string
numero = Number(numero);
const numerot = document.getElementById('numerot');
const text = document.getElementById('texto');
const text2 = document.getElementById('texto2');
numerot.innerHTML = numero;
text.innerHTML = ' '; // se no html tiver algum texto para mostrar na tela basta colocar isso para limpar
text.innerHTML += `<p>a raiz quadrada é ${Math.sqrt(numero)}</p>`;
text.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(numero)}</p>`;
text.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
