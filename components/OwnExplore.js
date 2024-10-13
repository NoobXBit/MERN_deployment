import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
 
const OwnExplore = () => {  
    return (
        <>
        <View style={styles.wayfinder}>
                <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo.png" style={{height:50, width: 80}}/>
            </View>
        <View style={styles.content}>
            <img src="./assets/images/proceed-own(1).png" alt="proceed-own(1).png" style={{height:'100%', width: '100%'}}/>
        </View>
        </>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        backgroundColor: '#f4f4f4'
    },
    content: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#003DA7',
        paddingVertical: 10,
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
    },
    footerButtonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    btn: {
        width: '33%',
        height: 30,
        backgroundColor: '#003DA7',
        padding: 4,
        marginTop: 10,
        marginLeft: 10,
        color: 'white'
    },
    headText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#003DA7'
    },
    thisColumn: {
        flexDirection: 'column'
    }, 
    thisRow:{
        flexDirection: 'row'
    },
    imgNU: {
        height: 40,
        widtth: 40,
    },
    option: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    makeSpace:{
        marginTop: 15
    },
    lessSpace: {
        marginBottom: -20
    },
    wayfinder: {
        flexDirection: 'column',
        alignItems: 'center'
    }
    
});
 
export default OwnExplore;
