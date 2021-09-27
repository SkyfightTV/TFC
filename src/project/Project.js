import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Members from "./membres/Members";
import Objects from "./objects/Objects";
import Styles from "../Styles";

const Tab = createMaterialTopTabNavigator();

function project() {
    return (
        <Tab.Navigator initialRouteName="Members" screenOptions={{headerTitleAlign: 'center', headerStyle: Styles.colors.second, headerTitleStyle: Styles.colors.text}}>
            <Tab.Screen name="Members" component={Members}/>
            <Tab.Screen name="Objects" component={Objects} options={{title: "Ma nouvelle soirée"}}/>
        </Tab.Navigator>
    );
}

export default project


