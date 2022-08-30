import React,{Component} from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import TelaA from "./src/Views/TelaA";
import TelaB from "./src/Views/TelaB";
import TelaC from "./src/Views/TelaC";

const Tab = createBottomTabNavigator()

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <StatusBar/>

                <NavigationContainer>
                    <Tab.Navigator tabBarOptions={{
                        activeTintColor:'red',
                        inactiveTintColor:'blue',
                        labelStyle:{ fontSize:30 }
                    }} initialRouteName="TelaB">
                        <Tab.Screen name='TelaA' component={TelaA}/>
                        <Tab.Screen name='TelaB' component={TelaB}/>
                        <Tab.Screen name='TelaC' component={TelaC}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        )
    }
        
}