import React,{ useState } from 'react'
import {Text} from 'react-native'
import Filho from './Filho'

export default ()=>{
    const [num, setNum]=useState(0)
    const [text,setTexto] = useState(/*aqui vai um valor padrao */)

    function exibirValor (numero,texto){
        setNum(numero)
        setTexto(texto)
        //chama essa funcao onde ela altera a variavel que esta vinculada com o useState
    }
    


    return(
        <>
            <Text>{text}{num}</Text>
            {/* aqui esta pegando o valor alterado das colchetes */}
            <Filho
            max={60}
            min={1}
            funcao={exibirValor}
            // enviando um parametro de funcao
            />
        </>
    )
}