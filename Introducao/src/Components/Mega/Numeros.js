import React from 'react'
import { Text,View, StyleSheet} from 'react-native'

export default ({num})=>{

    return(
        <View style={styles.Container}>
            <Text style={styles.Num}>
                {num}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'black',
        height:50,
        width:50,
        margin:5,
        borderRadius:25,
    },
    Num:{
        color:'#fff',
        marginTop:10,
        textAlign:'center',
        fontSize:20
    }

})