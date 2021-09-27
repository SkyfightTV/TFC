import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home'
import Project from './project/Project'

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Project" component={Project}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
