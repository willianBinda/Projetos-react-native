import React from 'react';
import { Text } from 'react-native';
//se nao for default a funcao o nome é importante declarar com o nome da funcao
export default function (){//componente padrao
    return <Text>Componente 01 Oficial</Text>
}
export function Comp2(){    //recisa {declarar aqui dentro as funcoes para utiliza-las} no App raiz
    return <Text>Componente 02</Text>
}
export function Comp3(){
    return <Text>Componente 03</Text>
}
//ou 
// export{Comp2,Comp3}
//na troca de export function Comp
