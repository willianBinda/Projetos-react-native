<SafeAreaView style={{flex:1}}>
                <StatusBar/>

                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="TelaB">
                        <Drawer.Screen name='TelaA' component={TelaA}/>
                        <Drawer.Screen name='TelaB' component={TelaB}/>
                        <Drawer.Screen name='TelaC' component={TelaC}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaView>