/*
const container = document.querySelector('.container h1');
const data = new Date();


function pegaSemana(data){
    const getSemana = data.getDay(); 
    const semana = ['domingo','segunda','terça','quarta','quinta','sexta','sabado']
    return semana[getSemana];
}

function pegaDay(data){
    const dia = data.getDate();
    return dia;
}

function pegaMes(data){
    const mes = data.getMonth();
    const meses=['janeiro','fevereiro','março','abril','maio','junho',
    'julho','agosto','setembro','outubro','novembro','dezembro'];
    return meses[mes];
}
function pegaAno(data){
    const ano = data.getFullYear();
    return ano;
}

function zeros(temp){
    const a= temp;
    return a<10?`0${a}`:`${a}`;
}

function pegaMS(data){
    const min = zeros(data.getMinutes());
    const sec = zeros(data.getSeconds());
    const text = `${min}:${sec}`;
    return text;
}
const semana = pegaSemana(data);
const dia = pegaDay(data);
const mes = pegaMes(data);
const ano = pegaAno(data);
const horario = pegaMS(data);

const resultado = `${semana}, ${dia} de ${mes} de ${ano} ${horario}`;

container.innerHTML = resultado; 
*/

    

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full',timeStyle:'short'});
//dateStyle:'full' é = a 'segunda-feira, 20 de junho de 2022'