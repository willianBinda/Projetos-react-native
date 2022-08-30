import React,{useState} from 'react';
import {Text}from 'react-native';
import { Button, View } from 'react-native';
import ContadorDisplay from './contadorDisplay';

//useState seria basicamente um hooks

export default props=>{
    const [num, setNum] = useState(0)//valor padrao de num
    
    function exibirVal(valor){
        setNum(valor)
    }
    

    return(
        <View > 
            <Text style={{fontSize:30}}>Contador</Text>
            <ContadorDisplay
            num = {num}
            funcao={exibirVal}
            />

        </View>
    )
}