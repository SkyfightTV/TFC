import React from 'react';
import render from './main/main'
import {Text, View} from "react-native";
import {styles} from "./styles";

export default class main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to staon your app!</Text>
                <Text>Open up App.js to staon your app!</Text>
            </View>
        );
    }
}