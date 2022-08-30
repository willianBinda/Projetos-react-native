import React from 'react';
import {Button} from 'react-native';

export default ()=>{

    function execut(){
        console.warn('execut 01')
    }

    return(
        <>
            <Button onPress={execut}
            /*
            quando colocamos () do lado da funcao significa que estamos executando ela 
            ou seja, quando caregar o componente vai executar ela.
            agora se deixar sem () quando carregar o componente nao acontece nada so chama a funcao e quando
            clicar no botao é que vai executar a função
            */
            title='execut 01'/>

            <Button title='execut 02'
            onPress={()=>{console.warn('excut 02')}}/>
            <Button title='execut 03'
            onPress={()=>{console.warn('excut 03')}}/>
        </>
    )
}