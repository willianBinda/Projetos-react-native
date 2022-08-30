import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Header';
import RotaPesquisa from './RotaPesquisa';

const Stack = createNativeStackNavigator()


export default function App(){
  return(
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='inicio'>
            <Stack.Screen options={{headerShown:false}} name='Opções' component={Header}/>
            <Stack.Screen name='Instagram' component={RotaPesquisa}/>
          </Stack.Navigator>
        </NavigationContainer>

    </View>//CONTAINER
    


  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})
//esse flex vai se comportar da seguinte maneira: o primeiro vai ocupar 1/6 -segundo 2/6 assim por diante
//o primeiro é uma parte mais pequena e o ultimo a mais grande
//1+2+3 = 6
/*
const styles = StyleSheet.create({
  container:{
    flex:1,//aqui como a estilizacao esta na view principal ele vai ocupar toda a tela 
    justifyContent:"center",//aqui posiciona no centro da pagina 
    // alignItems:'center',//ele coloca no centro do container da view
    flexDirection:'column',
    width:200,
  },
  first:{
    flex:1,
    backgroundColor:'yellow',
    justifyContent:'center'//aqui o conteudo q tiver dentro dessa div/view vai para o centro desse bloco
  },
  second:{
    flex:1,
    backgroundColor:'blue'
  },
  third:{
    flex:1,
    backgroundColor:'red'
  }
  
})
*/