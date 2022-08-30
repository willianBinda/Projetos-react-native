import React,{Component} from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme, } from "victory-native";
import logo from './assets/logo_fluxo.png'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image source={logo}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

//npm install react-native-svg
//npm install 