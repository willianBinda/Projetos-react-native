import React from 'react';
import {Text} from 'react-native'

export default props=>{
    if(props.num %2 ===0){
        return(
            <Text>Par</Text>
        )
    }
    return(
        <Text>Impar</Text>
    )
}