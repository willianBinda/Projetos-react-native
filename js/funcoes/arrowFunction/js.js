const a= function(numero){
    //if(numero!=Number()) return numero;
    if(typeof(numero)!='Number'){
        return numero;
    }else if(numero%3==0 && numero%5==0) {
        return "FizzBuzz";
    }else if(numero%3==0){
        return "Fizz";
    }else if(numero%5==0){
        return "Buzz";
    }//else{
       // return numero;
    //}
}



let valor = 1;
while(valor>=0&&valor<=100){
    console.log(valor,a(valor));
    valor++;
}


/* const a = (x,y) => x > y    ?    x    :   y    */ 
//      nom  param    if      true      false




