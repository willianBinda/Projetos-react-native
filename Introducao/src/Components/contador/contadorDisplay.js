import React from 'react'
import {Text, View,Button} from 'react-native'
//useState seria basicamente um hooks

export default props=>{
    function inc(numero){
        return numero+1
    }
    function dec(numero){
        return numero-1
    }


    return(
        <View>
            <Button 
            title='         +        '
            onPress={()=>{
                const incr = inc(props.num)
                props.funcao(incr)
            }}
            />

            <Text style={{textAlign:'center', fontSize:20}}>
                {props.num}        
            </Text>
            
            <Button 
            title='         -        '
            onPress={()=>{
                const decr = dec(props.num)
                props.funcao(decr)
            }}
            />
        </View>
    )
}