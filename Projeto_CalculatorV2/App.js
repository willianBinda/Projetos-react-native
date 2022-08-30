import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Buttons from './src/Components/Buttons'
import Display from './src/Components/Display'


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  displayContainer:{
    flex:1,
    alignItems:'flex-end',
    backgroundColor:'#5f7b7d',
    marginTop:40,
  },
  ButtonsContainer:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
})

const initialState={
  valorDisplay:'0',
  operador:null,
  valores:['0','0'],
  index:0
}


export default class App extends Component{

  state={...initialState}

  addNum = (n) => {
    const verif = ''


    this.setState({valorDisplay:verif+n})
    const valor = this.state.valorDisplay
    const valores = [...this.state.valores]
    const index = this.state.index
    // valor = valor.split('')
    valores[index] = valor
    this.setState({valores:valores})
    console.warn(valores)
    



  }
  op = (operation)=>{
    const index = this.state.index
    if(index === 0 ){
      this.setState({index:1,valorDisplay:'0',operador:operation})
    }else if(index === 1 && operation==='='){
      const valores = [...this.state.valores]
      try{
        valores[0] = eval(`${valores[0]}` `${this.state.operador}` `${valores[1]}`)
      }catch(e){
        alert('rr')
      }
      valores[1]='0'
      this.setState({valorDisplay:`${valores[0]}`})
    }
  }



  clear = ()=>{
    this.setState({...initialState})
  }




  render(){
    return(
      <View style={styles.container}>

        <View style={styles.displayContainer}>
          <Display valor={this.state.valorDisplay}/>
        </View>

        <View style={styles.ButtonsContainer}>
          <Buttons sinal={'CE'} double ext onClick={this.clear}/>
          <Buttons sinal={'X'} ext onClick={this.apaga1}/>
          <Buttons sinal={'/'} operation onClick={this.op}/>
          <Buttons sinal={'7'} onClick={this.addNum}/>
          <Buttons sinal={'8'} onClick={this.addNum}/>
          <Buttons sinal={'9'} onClick={this.addNum}/>
          <Buttons sinal={'*'} operation onClick={this.op}/>
          <Buttons sinal={'4'} onClick={this.addNum}/>
          <Buttons sinal={'5'} onClick={this.addNum}/>
          <Buttons sinal={'6'} onClick={this.addNum}/>
          <Buttons sinal={'+'} operation onClick={this.op}/>
          <Buttons sinal={'1'} onClick={this.addNum}/>
          <Buttons sinal={'2'} onClick={this.addNum}/>
          <Buttons sinal={'3'} onClick={this.addNum}/>
          <Buttons sinal={'-'} operation onClick={this.op}/>
          <Buttons sinal={'0'} double onClick={this.addNum}/>
          <Buttons sinal={'.'} onClick={this.addNum}/>
          <Buttons sinal={'='} operation onClick={this.op}/>
         
        </View>
      </View>
    )
  }
}

