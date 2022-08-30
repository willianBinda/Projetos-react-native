import React from 'react'
import { Text, View } from 'react-native'
import Membro from './Membro'

export default props=>{
    return(

        <>
            <Text>Familia</Text>
            {props.children}

        </>
 
    )
}