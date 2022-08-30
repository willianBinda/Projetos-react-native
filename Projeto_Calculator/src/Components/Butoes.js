import React from 'react'
import { 
    View,
    StyleSheet, 
    Text, 
    TouchableHighlight,
    Dimensions
} from 'react-native'


export default props =>{

    const stylesButton = [styles.button] 
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress={()=>{props.onClick(props.label)}}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        fontSize:40,
        height: Dimensions.get('window').width / 4,//declara dimensions e aplica isso 
        width: Dimensions.get('window').width / 4,//pega a janela e divide por 4
        padding:20,
        backgroundColor:'#d5f0ef',
        textAlign:'center',
        borderColor:'#967112',
        borderWidth:1
    },
    operationButton:{
        backgroundColor:'orange',
        color:'#31ad35'
    },
    buttonDouble:{
        width:(Dimensions.get('window').width /4)*2
    },
    buttonTriple:{
        width:(Dimensions.get('window').width /4)*3
    }
})