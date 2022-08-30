import React from 'react'
import { View, _View} from 'react-native'

export default props =>{
    
    return(
        <View style={{
            backgroundColor:props.cor,
            flex:1,
            width:100,
            height:100,
            flexGrow:props.n 
            //cresce correspondente ao tanho que tem liberado na view se tiver algum valor padrao setado 
            //na height ele pcupa o que sobrou
        }}
        />
    )
}