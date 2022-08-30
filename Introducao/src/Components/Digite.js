import React,{useState} from 'react';
import { Text, View,FlatList, TextInput } from 'react-native';

export default props=>{

    const [nome,setNome] = useState()
    const [sobrenome,setSobrenome] = useState()

    return(
        <View>
            <Text>{nome} {sobrenome}</Text>
            <TextInput
            //fica ofuscado no imput com essa mensagem quando digitar ela some 
            placeholder='Digite seu nome'
            onChangeText={nome=>{setNome(nome)}}
            style={{borderWidth:1, padding:10}}
            />
            <TextInput
            //fica ofuscado no imput com essa mensagem quando digitar ela some 
            placeholder='Digite seu sorenome'
            onChangeText={xx=>{setSobrenome(xx)}}
            style={{borderWidth:1, padding:10}}
            />

        </View>
    )

}