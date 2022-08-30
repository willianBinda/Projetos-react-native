//aula 63

/*
try{
    //executado quando nao há erros
}catch(e){
    //executado quando há erros 
}finally{
    //sempre executada
}
*/

/*

try{
    console.log(naoexisto);
}catch (error){
    console.log('naoexisto');
    console.log(error)
}
*/


/*
function soma(x,y){
    if(typeof(x)!='number'|| typeof(y)!='number'){
        //throw new error('x e y precisam ser numeros');     //pode colocar typeerror ou referencerror 
        throw('x e y precisam ser numeros');                 //que vai mostrar no console somente junto com a frase
    }
    return x+y;
}

try{
    console.log(soma(1,2));     //tente fazer isto se der erro vai armazenar no throw e depois 
    console.log(soma('1',2));   //chamando no catch vai imprimir aquilo  
}catch(error){
    console.log(error);
}
//se der erro lancar algum alert mas nunca mostrar o erro  

*/


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando a instancia de data.');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false                           //transforma em 24 horas 
    });

}

try{
    const data = new Date('1999-03-30 12:30:50');
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    console.log('data invalida');
}finally{
    console.log('tenha um bom dia');
}


