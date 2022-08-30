import React from 'react'
import {Button, Text} from 'react-native'

export default (props)=>{

    function gerador(max,min){
        const fator = max-min + 1
        return parseInt((Math.random()*fator)+min)
    }
    
    return(
        <Button
            title='executar'
            onPress={function(){
                const n = gerador(props.min,props.max)
                // aqui esta passando como parametro os valores do pai 
                props.funcao(n,'O valor é: ')
            }}
        />
    )
}