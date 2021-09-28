import React from "react";
import {DATA} from "../membres/Members";
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

export const PLATS = [];

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "NULL",
            id: 0,
            name: "",
            amount: 0,
            members: {},
            show: false,
            refresh: false
        }
    }

    initModal(title, id) {
        this.setState({
            title: title,
            id: id,
            name: PLATS.length > id ? PLATS[id].name : "",
            amount: PLATS.length > id ? PLATS[id].amount : 0,
            members: PLATS.length > id ? PLATS[id].members : {},
            show: true
        })
    }

    removeModal(id, save) {
        if (save) {
            PLATS[id] = {
                id: id,
                name: this.state.name,
                amount: this.state.amount,
                members: this.state.members
            }
        } else
            PLATS.splice(id,1)
        this.setState({
            show: false,
            refresh: !this.state.refresh
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableHighlight  onPress={() => this.initModal("Modifier un plat", item.id)}>
                <View style={styles.title}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.amount}$</Text>
                </View>
            </TouchableHighlight>
        );
    };

    membersItem = ({item}) => {
        return (
            <TouchableHighlight>
                <View style={styles.title}>
                    <Button title=" " style={styles.item}/>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button title="Ajouté un nouveau Plat" onPress={() =>
                    this.initModal("Ajouté un plat", PLATS.length)}/>
                <FlatList
                    data={PLATS}
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
                            placeholder="Nom du plat"
                            style={styles.textInput}
                            onChangeText={(text)=>{this.setState({name: text})}}
                            value={this.state.name}/>
                        <TextInput
                            placeholder="Prix du plat"
                            keyboardType='number-pad'
                            style={styles.amountInput}
                            onChangeText={(text)=>{
                                if (text === "")
                                    text = "0"
                                this.setState({amount: parseFloat(text)})}}
                            value={this.state.amount+""}/>
                        <View>
                            <FlatList
                                data={DATA}
                                renderItem={this.membersItem}/>
                        </View>
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
    amountInput: {
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