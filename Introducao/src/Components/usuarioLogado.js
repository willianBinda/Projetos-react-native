import React from 'react';
import { Text } from "react-native"
import If from './if'

export default props=>{
    const usuario = props.usuario || {}
    return(
        <>
            <If teste={usuario && usuario.nome && usuario.email}>{/**se aqui estiver verdadeira vai retornar props.children e a children neste cado é o que esta abaixo  */}
                <Text style={{fontSize:30}}>Usuario Logado: </Text>
                <Text >
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}