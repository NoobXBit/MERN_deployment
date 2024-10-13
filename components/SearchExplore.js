import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, TextInput } from 'react-native';
 
const WayHome = ({ navigation }) => {  

    const goToFeedback = () => {
        navigation.navigate('Feedback');
    }

    return (
        <View style={styles.container}>
            <View style = {styles.thisColumn}>
                <img src="./assets/images/search-bg3.png" alt="search-bg3.png" style={styles.theBG}/>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    theBG:{
        flex:1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover' 
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        flex: 1 ,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
    },
    footerButtonText: {
        fontWeight: 'bold',
        color: '#f4f4f4',
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
    buttonIcon: {
        width: 40,
        height: 40,
        alignItems: 'center'
    }, 
    thisColumn: {
        flexDirection: 'column'
    }, 
    thisRow:{
        flexDirection: 'row'
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
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
    },
    thisOption: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    clickedBtnText: {
        fontWeight: 'bold',
        color: '#FFE76D',
    }
    
});
 
export default WayHome;
