import React from 'react'
import {Button, Text, View} from "react-native";
export default class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>C'est le Home</Text>
                <Button onPress={() => this.props.navigation.navigate("Project")}/>
            </View>
        )
    }
}