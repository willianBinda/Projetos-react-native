import React from 'react';
import { Text } from 'react-native';




export default ({Min,Max})=>{//desestruturacao
    const min = Number(Min);
    const max = Number(Max);
    const numAle = Math.random()*(max - min)+min;
    return <Text style={{fontSize:30, textAlign:'center'}}>O numero aleatorio entre {Min} e {Max} é :{numAle.toFixed()}</Text>
}