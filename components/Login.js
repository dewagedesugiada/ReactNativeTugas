import React, {Component} from 'react'
import {StyleSheet, Text, View, StatusBar, TextInput, Image, TouchableWithoutFeedback, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import FormTransfer from "./FormTransfer";

export default class Login extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(

            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                       source={require('../assets/money.png')}>
                                </Image>
                                {/*<Text style={styles.title}>App Wallet</Text>*/}
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                           placeholder='Enter username'
                                           keyboardType='default'
                                           returnKeyType= 'next'
                                           autoCorrect={false}
                                           onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                           placeholder='Enter password'
                                           keyboardType='default'
                                           returnKeyType= 'go'
                                           autoCorrect={false}
                                           ref={"txtPassword"}
                                />

                                <TouchableOpacity style={styles.buttonContainer} onPress={() =>  this.props.navigation.navigate('FormTransfer')} >
                                    <Text style={styles.text}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11A366',
        flexDirection: 'column'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo:{
        height:150,
        width: 200
    },
    title:{
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        opacity: 0.9
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 150,
        padding: 5
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        color: 'rgb(32, 53, 70)',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 1
    },
    buttonContainer: {
        paddingVertical: 15,
        backgroundColor: 'rgb(32, 53, 70)',
        borderRadius: 1
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});