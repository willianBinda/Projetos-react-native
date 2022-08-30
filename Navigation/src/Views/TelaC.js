import React from "react";
import {SafeAreaView} from 'react-native'
import TextoCentral from "../Components/TextoCentral";


export default props=>{
    const route = props.route && props.route.params && props.route.params.numero ? props.route.params.numero: 0
    return(
        <TextoCentral corFundo={'green'}>
            telaC - {route}
        </TextoCentral>
    )
}