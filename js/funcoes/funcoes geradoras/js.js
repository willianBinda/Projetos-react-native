function* geradora1(){
    yield 'valor1';
    yield 'valor2';
    yield 'valor3';
    
}
//const g1 = geradora1();
//console.log(g1.next().done);       //done = false pq ainda nao terminou o gerador
//console.log(g1.next().value);      //retorna o valor 
// for(valor of g1){
    // console.log(valor);
// }

function* reradora2(){
    let i =0;
    while(1){
        yield i;
        i++;
    }
}
// const g2 = reradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
// for(let valor of geradora4()){
    // console.log(valor);
// }

//const g4 = geradora4();

function* geradora5(){
    yield function(){console.log('vim do y1');};
    return  function(){console.log('vim do retorno');};
    yield function(){console.log('vim do y2');};
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
