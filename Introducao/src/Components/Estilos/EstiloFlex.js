import React from 'react'
import { View, _View} from 'react-native'
import Quadrado from './quadrado'
export default props =>{
    
    return(
        <View style={{
            flex:1,
            backgroundColor:'black',
            // alignItems:'stretch'    //stretch so funciona se nao tiver um tamanho fixo para ele ja definido
        }}>
            <Quadrado cor='yellow'n = {1}/>
            <Quadrado cor='red' n ={2}/>
            <Quadrado cor = 'green' n = {9}/>
            
        </View>
    )
}