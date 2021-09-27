import React from "react";
import {
    View,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Text,
    Button,
    Modal,
    TextInput,
} from "react-native";

export const DATA = [];

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "NULL",
            id: 0,
            show: false
        }
    }

    initModal(title, id) {
        if (DATA.length === id) {
            DATA[DATA.length] = {
                id: id,
                name: "",
                amount: 0.0
            }
        }
        this.setState({
            title: title,
            id: id,
            show: true
        })
    }

    removeModal(id, save) {
        this.setState({
            show: false
        })
        if (!save)
            DATA.splice(DATA.findIndex(d => d.id === id) , 1)
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.title} onPress={() => this.initModal("Edit", item.id)}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.amount}$</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button title="Nouveau membre" onPress={() =>
                    this.initModal("Ajouté un membre", DATA.length)}/>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    extraData={this.state.show}/>
                <Modal
                    presentationStyle='overFullScreen'
                    animationType='fade'
                    transparent={true}
                    visible={this.state.show}
                    style={styles.modal.this}>
                    <View style={styles.modal.first}>
                        <Text style={styles.modal.text1}>{this.state.title}</Text>
                        <TextInput
                            placeholder="Nom du membre"
                            style={styles.textInput}
                            onChangeText={(text)=>DATA[this.state.id].name=text}
                            value={()=>DATA[this.state.id] === null ? "" : DATA[this.state.id].name}
                        />
                        <View style={styles.modal.second}>
                            <Button title="Supprimer" onPress={()=>this.removeModal(this.state.id, false)}/>
                            <Button title="Enregistrer" onPress={()=>this.removeModal(this.state.id, true)}/>
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
        marginVertical:5,
    },
    title: {
        fontSize: 32,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row'
    },
    textInput: {
        marginVertical: 10,
        height: 40,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    modal: {
        this: {
            justifyContent: 'center',
            alignContent: 'center'
        },
        first: {
            backgroundColor: 'lightgrey',
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 20,
            marginVertical: 150

        },
        second: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10
        },
        text1: {
            textAlign: 'center',
            fontSize: 25
        }
    }
};

export default Members