import React from 'react'
import {Button, Text, View} from "react-native";

export default class Home extends React.Component {
    submit() {
        this.props.navigation.navigate('Project')
    }

    render() {
        return (
            <View>
                <Text>C'est le Home</Text>
                <Button title="Button" onPress={() => this.submit()}/>
            </View>
        )
    }
}