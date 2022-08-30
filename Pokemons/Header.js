import React,{Component} from 'react';
import {View} from 'react-native';
import { Button, StyleSheet,Text} from 'react-native';

export default class Header extends Component{
    render(){
        const {navigation} = this.props
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.texto}>Instagram</Text>
                </View>
                <View style={styles.botoes}>
                    <View>
                        <Button style={styles.botao}title='Home' onPress={()=>{
                            navigation.push('Instagram')
                        }} />
                    </View>
                    <View style={styles.botao}>
                        <Button title='Search'/>
                    </View> 
                    <View style={styles.botao}>
                        <Button title='curtidas'/>
                    </View>
                    <View style={styles.botao}>
                        <Button title='profile'/>
                    </View>                
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        backgroundColor:'red',
    },
    botoes:{
        flex:1,
        flexDirection:'row',
        // alignItems:'flex-end',
        backgroundColor:'green',
    },
    texto:{
        fontSize:25
    },
    botao:{
        flex:1,
        width:'50%',
    }
})
