import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

export default class FormTransfer extends Component {

    data = [
        {value: 'BCA'},
        {value: 'BNI'},
        {value: 'BRI'},
        {value: 'BTPN'},
        {value: 'Mandiri'},
        {value: 'Muamalat'}
    ]

    state = {
        bank: '',
        rek: '',
        balance: ''
    }
    handleBank = (text) => {
        this.setState({bank: text})
    }
    handleRek = (text) => {
        this.setState({ rek: text })
    }
    handleBalance = (text) => {
        this.setState({ balance: text })
    }
    transfer = (rek, balance) => {
        alert('Anda telah melakukan transfer uang sejumlah : Rp. ' + balance + ' ke no rekening: ' + rek)
    }

    render() {


        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Transfer</Text>
                </View>
                <Dropdown style={styles.dropdown}
                    label='Bank'
                    data={this.data}
                    onChangeText={this.handleBank}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="No rek"
                    keyboardType='numeric'
                    returnKeyType= 'next'
                    autoCorrect={false}
                    maxLength={20}
                    onBlur={Keyboard.dismiss}
                    onSubmitEditing={() => this.refs.txtBalance.focus()}
                    ref={"txtRek"}
                    onChangeText={this.handleRek}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Balance"
                    keyboardType='numeric'
                    returnKeyType= 'go'
                    autoCorrect={false}
                    maxLength={20}
                    ref={"txtBalance"}
                    onBlur={Keyboard.dismiss}
                    onChangeText={this.handleBalance}
                />

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => this.transfer(this.state.rek, this.state.balance)}
                        style={styles.saveButton}
                    >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15
    },
    dropdown:{
        height: 15
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});