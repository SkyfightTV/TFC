import React from "react";
import {
    View,
    TouchableHighlight,
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
            name: "",
            show: false,
            refresh: false,
        }
    }

    initModal(title, id) {
        this.setState({
            title: title,
            id: id,
            name: DATA.length > id ? DATA[id].name : "",
            show: true
        })
    }

    removeModal(id, save) {
        if (save) {
            DATA[id] = {
                id: id,
                name: this.state.name,
                amount: 0.0
            }
        } else
            DATA.splice(id,1)
        this.setState({
            show: false,
            refresh: !this.state.refresh
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableHighlight  onPress={() => this.initModal("Modifier un membre", item.id)}>
                <View style={styles.title}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.amount}$</Text>
                </View>
            </TouchableHighlight>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button title="Ajouté un nouveau Membre" onPress={() =>
                    this.initModal("Ajouté un membre", DATA.length)}/>
                <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    extraData={this.state.refresh}/>
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
                            onChangeText={(text)=>{this.setState({name: text})}}
                            value={this.state.name}/>
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
        fontSize: 50,
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