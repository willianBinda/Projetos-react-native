import React from 'react'
import {View, Text, StyleSheet}from 'react-native'

export default ({...props}) =>
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value} 
        </Text>
    </View>

const styles = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        marginTop:40,
        justifyContent:'center',
        backgroundColor:'#7a8785',
        alignItems:'flex-end',
    },
    displayValue:{
        fontSize:60,
        color:'white'
    }
})