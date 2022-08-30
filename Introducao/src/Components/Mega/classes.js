import React,{ Component } from 'react'
import { Button, ScrollView, Text, View }from 'react-native'
import { TextInput } from 'react-native'
import MegaNumero from './Numeros'

export default class Mega extends Component{
    
    
    state = {
        qtdeNum: this.props.qtdeNum,
        numeros: []
    }

    constructor(props){
        super(props)
        this.alterarquantidadeNum = this.alterarquantidadeNum.bind(this)
    }

    alterarquantidadeNum = (qtde)=>{
        this.setState({qtdeNum: +qtde})
    }

    gerarNumeros = ()=>{
        const numeros = Array(this.state.qtdeNum)
            .fill()//cria um array com a quantidade de elementos q esta setana em qtdeNum
            .reduce(n=> [...n,this.gerarNumeroNaoContido(n)],[])
            .sort((a,b)=>a-b)
        this.setState({numeros})
    }
    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random()*60) +1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }//se novo ja estiver contido em nums 


    exibirNum=()=>{
        const nums = this.state.numeros
        return nums.map(nums=>{
            return  <MegaNumero key={nums} num={nums}/>
        })
    }

    render(){
        return(
            <View>
                <Text>
                    Gerador mega sena
                </Text>
                <TextInput
                keyboardType='numeric'
                placeholder='Qualtidade de numeros'
                value={`${this.state.qtdeNum}`}
                onChangeText={this.alterarquantidadeNum}
                />
                <Button 
                title='gerar'
                onPress={this.gerarNumeros}
                />
                <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'center',flexWrap:'wrap',}}>
                        {this.exibirNum()}
                    </View>
                </ScrollView>
            </View>
            
        )
    }


}