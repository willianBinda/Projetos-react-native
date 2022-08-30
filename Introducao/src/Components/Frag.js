import React,{Fragment} from 'react';
import { Text } from "react-native";



export default (props)=>(
    <>
        <Text style={{fontSize:30}}>{props.primeiro}</Text>
        <Text>{props.segundo}</Text>
    </>
)