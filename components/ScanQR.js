import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
 
const Discover = ({navigation}) => { 
    const goToDiscover = ()=>{
        navigation.navigate('Discover');
    }
    const goToHome= ()=>{
        navigation.navigate('Home');
    }
    const goSearch= ()=>{
        navigation.navigate('GoSearch');
    }
    const goAbout= ()=>{
        navigation.navigate('About');
    }
    const goProfile= ()=>{
        navigation.navigate('Profile');
    }
    return (
        <View style={styles.container}>
            <View style={styles.wayfinder}>
                <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo.png" style={{height:50, width: 80}}/>
                <View style = {styles.makeSpace}></View>
            </View>
            
            <View style={styles.content}>
                <img src="./assets/images/scan-qr(1).png" alt="scan-qr(1).png" style={{height:'100%', width: '100%'}}/>
            </View>

            <View style={styles.wholeFooter}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress = {goToHome} style={styles.footerButton}>
                        <img src="./assets/logos/home-logo.png" alt="home-logo.png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {goToDiscover} style={styles.footerButton}>
                        <img src="./assets/logos/discover-logo.png" alt="discover-logo.png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Discover</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity style={styles.theQR}>
                        <img src="./assets/clickedIcons/qr-logo-clicked.png" alt="qr-logo-clicked.png" style={styles.qrIcon}/>
                    </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={goAbout} style={styles.footerButton}>
                        <img src="./assets/logos/AboutUs-icon(1).png" alt="AboutUs-icon(1).png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>About Us</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress = {goProfile} style={styles.footerButton}>
                        <img src="./assets/logos/profile-logo (2).png" alt="profile-logo (2).png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
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
    imgHome: {
        width: 400,
        height: 250,
        alignItems: 'center',
        marginTop: 10
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
    theQR: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#003DA7',
        paddingVertical: 10,
        flex: .5,
        alignItems: 'center',
        borderRadius: 100
    },
    wholeFooter: {
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    qrIcon: {
        width: 60,
        height: 60,
        alignItems: 'center'
    },
    clickedBtnText: {
        fontWeight: 'bold',
        color: '#FFE76D',
    }
    
});
 
export default Discover;
