import React from "react";
import Members, {DATA, refresh} from "../membres/Members";
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
import CheckBox from "@react-native-community/checkbox";

export const PLATS = [];

class Objects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "NULL",
            id: 0,
            name: "",
            amount: 0,
            members: [],
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
            members: PLATS.length > id ? PLATS[id].members : [],
            show: true,
            refresh: !this.state.refresh
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
            members: [],
            show: false,
            refresh: !this.state.refresh
        })
        calculatePrice()
    }

    checkBox(item) {
        if (this.state.members.includes(item.id))
            this.state.members.splice(this.state.members.findIndex(checkIndex, item.id) - 1, 1)
        else
            this.state.members[this.state.members.length] = item.id
    }

    membersItem = ({item}) => {
        return (
            <TouchableHighlight>
                <View style={styles.title}>
                    <CheckBox
                        onValueChange={()=>this.checkBox(item)}
                        value={this.state.members.includes(item.id)}
                        style={styles.item}/>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            </TouchableHighlight>
        );
    };

    renderItem = ({item}) => {
        let members=""
        for(let id in item.members)
            members+=DATA[id].name+", "
        members=members.substr(0, members.length-2);
        return (
            <TouchableHighlight onPress={()=>this.initModal("Modifier un plat", item.id)}>
                <View style={styles.title}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{members}</Text>
                    <Text style={styles.item}>{item.amount}€</Text>
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
                    ListEmptyComponent={
                        <Text style={styles.modal.text1}>Aucun plats</Text>
                    }
                    style={styles.flat_list}
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
                                this.setState({amount: text === "" ? "" : parseFloat(text)})}}
                            value={this.state.amount === 0 ? "" : this.state.amount+""}/>
                        <View>
                            <Text style={styles.modal.text2}>Membres</Text>
                            <FlatList
                                ListEmptyComponent={
                                    <Text style={styles.modal.text1}>Aucun membres</Text>
                                }
                                data={DATA}
                                renderItem={this.membersItem}
                                style={styles.modal.flat_list}
                                extraData={this.state.refresh}/>
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
}

function checkIndex(element) {
    return element.label === this
}

function calculatePrice() {
    for(let m in DATA)
        DATA[m].amount=0

    for(let plat in PLATS)
        for(let m in PLATS[plat].members)
            DATA[m].amount+=(PLATS[plat].amount/PLATS[plat].members.length)
}

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
    flat_list: {
        backgroundColor: 'gray'
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
        },
        text2: {
            textAlign: 'center',
            fontSize: 15
        },
        flat_list: {
            borderColor: 'white',
            borderWidth: 1,
            borderHeight: 2,
            marginVertical: 10,
            maxHeight: 300
        }
    }
};

export default Objects