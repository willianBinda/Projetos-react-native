import React from 'react'
import { StyleSheet,Text, Dimensions,TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    buttons:{
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
        backgroundColor:'#8782ba',
        fontSize:30,
        textAlign:'center',
        borderWidth:1,
        padding:20,
        color:'black'
    },
    double:{
        width:(Dimensions.get('window').width/4)*2
    },
    operation:{
        backgroundColor:'#fa8805'
    },
    ext:{
        backgroundColor:'#438f5e',
        fontWeight:'bold'
    }
})

export default props=>{
    const stylesButton = [styles.buttons]
    if(props.double) stylesButton.push(styles.double)
    if(props.operation) stylesButton.push(styles.operation)
    if(props.ext) stylesButton.push(styles.ext)
    return(
        <TouchableHighlight onPress={()=>{props.onClick(props.sinal)}}>
            <Text style={stylesButton}>
                {props.sinal}
            </Text>
        </TouchableHighlight>
    )
}