const form = document.querySelector('.formulario');
//funcao principal
form.addEventListener('submit', function(e){                        // funcao anonima //(e) de event
    e.preventDefault();                                             // pega o evento e cancela ele
    const input_peso = e.target.querySelector('#peso');             // desse evento  alvo pegue a classe peso
    const input_altura = e.target.querySelector('#altura');         // de quem que esta vindo este evento

    const peso = Number(input_peso.value);
    const altura = Number(input_altura.value);
    if(!peso){                                                      // se altura for falsa ou seja NaN=false
        setResultado('peso invalido',false);
        return;
    }
    if(!altura){
        setResultado('altura invalida',false);
        return;
    }

    const imc = getIMC(peso,altura);
    const niveis = nivelP(imc);
    const msn = `Seu IMC é ${imc} ${niveis}.`
    setResultado(msn,true);
});



function nivelP(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2','obesidade grau 3'];

    if(imc > 39.9) return nivel[5];         // mais simplificado
    if(imc > 34.9) return nivel[4];
    if(imc > 29.9) return nivel[3];
    if(imc > 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}




function getIMC (peso,altura){
    const imc = peso/altura **2;
    return imc.toFixed(2);
}



function criaP(){
    const p = document.createElement('p');
    return p;
}



// local onde cria os resultados **** vai enviar os resultado
function setResultado(msg,isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';       //limpar espaço
    const p = criaP();

    if(isValid) p.classList.add('isvalid');
    if(!isValid) p.classList.add('notvalid');
    p.innerHTML = msg;
    resultado.appendChild(p);

}




/*
function setResultado(msg){
    const resultado = document.querySelector('#resultado');          // usando id chama com #   
    resultado.innerHTML = `<p>${msg}</p>`;                             // cria um p 
}
*/ 
/*

// local onde cria os resultados  vai enviar os resultado

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';                                   // primeiro limpa o html 
    const p = document.createElement('p');                      // cria um paragrafo no html
    p.innerHTML = 'qualquer coisa';                             //printa no p do html
    resultado.appendChild(p);                                   //adiciona um filho p na div resultado
}
*/
//p.classList.add('paragrafoResultado');            // cria uma class no p que pode ser cchamada no css e estiliza-la
 


/* funcao que cria paragrafos
function criaP(){
    const p = document.createElement('p');
    return p;
}
*/
