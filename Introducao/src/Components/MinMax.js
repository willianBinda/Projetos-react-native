import React from 'react';
import { Text } from 'react-native';

export default (props)=>{//props = parametros
    return <Text style={{fontSize:30,textAlign:'center'}}>O numero {props.Max} é maior que o numero {props.Min}</Text>
}