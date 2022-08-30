import React from "react";
import {View,Text} from 'react-native'

export default props=>{
    return(
        <View style={{
            alignItems:"center",
            justifyContent:"center"
            ,flex:1,
            backgroundColor:props.corFundo||'black'
            }}>
            <Text style={{fontSize:50,color:props.corTexto||'#FFF'}}>
                {props.children}
            </Text>
        </View>
    )
}