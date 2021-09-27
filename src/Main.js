import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home'
import Project from './project/Project'
import {Image, TouchableOpacity} from "react-native";
import Styles from "./Styles";

const paramButton =
    <TouchableOpacity>
        <Image source={require('../resources/params.png')}/>
    </TouchableOpacity>

const Stack = createNativeStackNavigator();

function main() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center', headerStyle: Styles.colors.primary, headerTitleStyle: Styles.colors.text}}>
                <Stack.Screen name="Home" component={Home} options={{title: "Tarte Flambée Calculator"}}/>
                <Stack.Screen name="Project" component={Project} options={{title: "Ma nouvelle soirée"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default main;
