import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Members from "./membres/Members";
import Objects from "./objects/Objects";
import Styles from "../Styles";

const Tab = createMaterialTopTabNavigator();

function project() {
    return (
        <Tab.Navigator initialRouteName="Members" screenOptions={styles.tab}>
            <Tab.Screen name="Members" component={Members} options={{title: "MEMBRES"}}/>
            <Tab.Screen name="Objects" component={Objects} options={{title: "PLATS"}}/>
        </Tab.Navigator>
    );
}

const styles = {
    tab: {
        headerTitleAlign: 'center',
        headerStyle: Styles.colors.second,
        headerTitleStyle: Styles.colors.text
    }
}

export default project


