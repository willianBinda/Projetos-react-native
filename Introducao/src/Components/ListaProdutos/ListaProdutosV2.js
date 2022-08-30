import React from 'react';
import { Text, View,FlatList } from 'react-native';
import Produtos from './Produtos'

export default props=>{
    const renderProd = ({item:p})=>{
        return(
            <>
                <Text style={{borderWidth:1,borderRadius:10,marginBottom:10, fontSize:20,padding:10,justifyContent:'flex-start'}}>
                    {p.id}) {p.produto}
                </Text>
            </>    
        )
    }
    return(
        <>
            <Text style={{fontSize:25}}>
                Lista produtos v2
            </Text>
            <FlatList
                data={Produtos}//sao os dados neste caso os produtos ou seja o array
                keyExtractor={i => i.id}
                renderItem={renderProd}
                
            />
        </>
    )
}