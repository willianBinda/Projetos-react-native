//funcao alto invocada
function escopo (){                                         //.form para selecionar a class e #form para id
    const form = document.querySelector('.form');           //para selecionar classes do html no js mesmo modo do css porem no js 
    const resultado = document.querySelector('.resultado')
    const pessoas = [];
    /*
    form.onsubmit = function (evento) {                     
        evento.preventDefault();                            //para quando for enviado ou apertado o button a pagin nao atualizar
        alert('Enviado com sucesso');
        console.log("foi enviado");
    };                                                      //sempre que terminar algo com sinal de '=' precisa de um ';'
    */

    /*
    function recebeEventoForm(evento){                                  
    evento.preventDefault();
   }
    form.addEventListener('submit',recebeEventoForm);                               //adiciona um escutador de eventos no formulario
    //outra maneira de fazer ele
    */
   function recebeEventoForm(evento){
       evento.preventDefault();                                 //PARA NAO ATUALIZAR A PAGINA E PERDER TUDO
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({
           nome:nome.value,
           sobrenome:sobrenome.value,
           peso:peso.value,
           altura:altura.value
       });
       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} `+
        `${peso.value}</p>`;
   }

   form.addEventListener('submit',recebeEventoForm);
}

escopo();

