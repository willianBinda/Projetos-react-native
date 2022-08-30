import React,{useState} from 'react';
import { Button, Text, View } from 'react-native';


export default ({numero=0,passo=1})=>{
    const [primo, setNumero] = useState(numero)
    //aqui temos o valor e a funcao que vai alterar o valor no front/altera o estado do atributo 'numero'
    return(
        <>
            
            <View>
                <Button title='        +         ' onPress={()=>{setNumero(primo + passo)}}/>
                <Text style={{fontSize:30,textAlign:'center'}}>{primo}</Text>
                <Button title='        -         ' onPress={()=>{setNumero(primo - passo)}}/>
            </View>
        </>
    )
}