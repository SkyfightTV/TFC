import React from 'react'
import {Button, Text, View, StyleSheet} from "react-native";
import styles from '../Styles'
import Project from '../project/Project'
export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.title}>TFC</Text>
                <Button onPress={() => this.props.navigation.navigate("Project")}/>
            </View>
        )
    }
}