import React from 'react';
import { Text, View } from 'react-native';
import Produtos from './Produtos'

export default props=>{
    return(
        <>
            <Text>Lista de produtos</Text>
            {Produtos.map(p=>{
                return(
                    <>
                        <Text key={p.id} >{p.id}) {p.produto} custa R$: {p.preco}</Text>
                    </>
                )
            })}
        </>
    )
}