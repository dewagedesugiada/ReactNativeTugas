import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import FormTransfer from './FormTransfer';
import Login from './Login';

export default class Navigator extends React.Component {

    render() {
        return <AppContainer />;
    }
}

const AppStackNavigator = createStackNavigator({
    Home: Navigator
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: 'yellow'
        }
    }
});

const AppDrawerNavigator = createDrawerNavigator(
    {
        Login: Login,
        Dashboard: FormTransfer,
        Transfer: FormTransfer,
        History: FormTransfer

    },{

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'yellow'
            }}}
)

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
