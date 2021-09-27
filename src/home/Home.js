import React from 'react'
import { Button, Text, View, StyleSheet } from "react-native"
import styles from '../Styles'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <Button title="Créer une nouvelle soirée" style={styles.title} onPress={() => this.props.navigation.navigate('Menu')}/>
            </View>
        )
    }
}