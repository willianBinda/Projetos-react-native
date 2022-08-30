const pessoas = [
    {id:3, nome:'jao'},
    {id:2, nome:'vin'},
    {id:1, nome:'cleit'}
];

const novasPessoas = new Map();
for(pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,  {...pessoa});
}

console.log(novasPessoas.get(1));
console.log();
for(valores of novasPessoas.keys()){
    console.log(valores);
}