import React from "react";
import {View, TouchableOpacity, FlatList, SafeAreaView, Text, Button, Modal} from "react-native";

const DATA = [
    {
        id: 0,
        name: "Antoine",
        amount: 0.0
    },
    {
        id: 1,
        name: "Clovis",
        amount: 0.0
    },
    {
        id: 2,
        name: "Florent",
        amount: 0.0
    }
];


class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "NULL",
            show: false
        }
    }

    showModal(title) {
        this.setState({
            title: title,
            show: true
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.title} onPress={() => this.showModal("Edit")}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.amount}$</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button title="Nouveau membre" onPress={() => this.showModal("Ajouté un membre")}/>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}/>
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.modal.primary}>
                        <View style={styles.modal.second}>
                            <Text style={textAlign='center'}>{this.state.title}</Text>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    }
};

const styles = {
    container: {
        flex: 1
    },
    item: {
        padding: 5,
        marginHorizontal: 7,
        marginVertical:5
    },
    title: {
        fontSize: 32,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'
    },
    modal: {
        primary: {
            backgroundColor: '#000000aa',
            flex: 1
        },
        second: {
            backgroundColor: 'white',
            margin: 50,
            borderRadius: 10,
            padding: 40,
            flex: 1
        }
    }
};

export default Members