import React,{Component} from "react";
import { SafeAreaView, Text, StatusBar, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";  
import TelaA from "./src/Views/TelaA";
import TelaB from "./src/Views/TelaB";
import TelaC from "./src/Views/TelaC";
import PassoStack from "./src/Components/PassoStack";


const Stack = createNativeStackNavigator()

export default class App extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <StatusBar/>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="TelaA"
                        screenOptions={{headerShown:true}}>

                        <Stack.Screen name='TelaA' options={{title:'arrasta pra cima'}}>
                            {props=>(
                                <PassoStack avancar="TelaB" {...props}>
                                    <TelaA/>
                                </PassoStack>
                            )}
                        </Stack.Screen>

                        <Stack.Screen name='TelaB'>
                            {props=>(
                                <PassoStack avancar="TelaC" {...props} voltar avancarParams={{numero:1111}}>
                                    <TelaB/>
                                </PassoStack>
                            )}
                        </Stack.Screen>

                        <Stack.Screen name='TelaC'  voltar>
                            {props=>(
                                <PassoStack {...props} voltar avancar='TelaC'>
                                    <TelaC {...props}/>
                                </PassoStack>
                            )}
                        </Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        )
    }
}
/*linha = 16 *//*aqui vai qual a rota inicial A ou B ou C */
/*linha = 17 *//* mostrar ou nao o header com o nome da rota inicial */
/*linha = 18 *//*aqui vai o nome q aparece no header e o componente seria a rota */
/*linha = 19 *//*aqui vai o titulo q sobrepoem ao nome seria mais um titulo mesmo*/