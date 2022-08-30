import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    displayText:{
        flex:1,
        color:'black',
        fontSize:60,
        textAlignVertical:'center'
    }
})

export default props=>{
    return(
        <Text style={styles.displayText} numberOfLines={1}>
            {props.valor}
        </Text>
    )
}