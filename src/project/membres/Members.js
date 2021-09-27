import React from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Styles from "../../Styles";

const DATA = [
    {
        title: "First Item"
    },
    {
        title: "Second Item"
    },
    {
        title: "Third Item"
    },
    {
        title: "Third Item"
    }
];

const Item = ({title, onPress}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <Text style={[styles.title]}>{title}</Text>
    </TouchableOpacity>
);


export default class Members extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={Item}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
    item: {
        paddingVertical: 1,
        marginHorizontal: 7,
        backgroundColor: Styles.colors.third
    },
    title: {
        fontSize: 40
    },
};
