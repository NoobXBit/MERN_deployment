import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
 
const NewStart = ({ navigation }) => {  

    const proceedOwnExplore = () => {
        navigation.navigate('Explore');
    }
    const proceedSearchExplore = () => {
        navigation.navigate('Search');
    }
    const goToDiscover = ()=>{
        navigation.navigate('Discover');
    }
    const goScanQR = ()=>{
        navigation.navigate('ScanQR');
    }
    const goSearch= ()=>{
        navigation.navigate('GoSearch');
    }
    const goAbout= ()=>{
        navigation.navigate('About');
    }

    return (
        <View style={styles.container}>
            <View style={styles.wayfinder}>
                <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo.png" style={styles.bgImg}/>
            </View>

            <ImageBackground src={require("../assets/images/bg.png")} alt="bg">
                <View style = {styles.logForm} >
                    <Text>LOGIN</Text>
                    <TextInput
                        placeholder='@students.nu-moa.edu.ph'    
                    />
                </View>
            </ImageBackground>         
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    }, 
    wayfinder: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    bgImg: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logForm:{
        position: 'aboslute',
        top: '40%',
        left: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }

    
});
 
export default NewStart;
