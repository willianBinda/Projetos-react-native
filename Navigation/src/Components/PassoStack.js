import React from "react";
import {View,Text, Button} from 'react-native'

export default props=>{
    return(
        <View style={{flex:1,}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                {props.voltar
                    ?   <Button 
                            title='Voltar' 
                            onPress={()=>{
                                props.navigation.goBack()   //apresenta um botao que volta para a tela anterior
                            }}
                        />
                    :false}
                {props.avancar
                    ?   <Button 
                            title='Avançar' 
                            onPress={()=>{
                                props.navigation.push(
                                    props.avancar,
                                    props.avancarParams
                                )
                            }}
                        />
                    :false}
            </View>
            <View style={{flex:1}}>
                {props.children}
            </View>
        </View>
    )
}


//navigate = navegar pelas telas se chagar na ultima e tiver pra navegar ele nao muda nada 
//push = ele pode mudar pra mesma tela porem com propriedades diferentes e componentes diferentes e 
//vai adicionando varias telas porem quando voltar vai voltar uma por uma telaC 