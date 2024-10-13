import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
 
const About = ({ navigation }) => {  

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
    const goToHome= ()=>{
      navigation.navigate('Home');
    }
    const goProfile= ()=>{
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
          <View style = {styles.logobanner}>
            <View style={styles.wayfinder}>
                <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo.png" style={{height:50, width: 80}}/>
            </View>
          </View>
            
            <View style= {styles.makeSpace}></View>
              <img src="./assets/images/AboutUs.png" alt="AboutUs.png" style={{height:'60%', width: '98%', marginBottom: 5, alignItems: 'center', marginLeft: 5}}/>
            
            <View style={styles.content}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.enrollText}>ENROLL</Text>
                </TouchableOpacity>
              <View sytle = {styles.makeSpace}></View>
              <View style={styles.smolHorizontalLine}></View>               
            </View>

            <View style = {styles.thisRow}>
              <TouchableOpacity style = {styles.theLogos}>
                <img src="./assets/logos/fb-logo.png" alt="FB-logo.png" style={styles.logos}/>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.theLogos}>
                <img src="./assets/logos/IG-logo.png" alt="IG-logo.png" style={styles.logos}/>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.theLogos}>
                <img src="./assets/logos/YT-logo.png" alt="YT-logo.png" style={styles.logos}/>
              </TouchableOpacity>

            </View>

            <View style={styles.wholeFooter}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={goToHome} style={styles.footerButton}>
                        <img src="./assets/logos/home-logo.png" alt="home-logo.png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToDiscover} style={styles.footerButton}>
                        <img src="./assets/logos/discover-logo.png" alt="discover-logo.png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Discover</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity onPress={goScanQR} style={styles.theQR}>
                        <img src="./assets/logos/qr-logo.png" alt="qr-logo.png" style={styles.qrIcon}/>
                    </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerButton}>
                        <img src="./assets/logos/AboutUs-icon-clicked(1).png" alt="AboutUs-icon-clicked(1).png" style={styles.buttonIcon}/>
                        <Text style={styles.clickedBtnText}>About Us</Text>
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
    logobanner: {
      width: '100%',
      height: 50,
      backgroundColor: '#f4f4f4'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        width: '45%',
        height: 50,
        backgroundColor: '#dfdfdf',
        padding: 4,
        marginTop: 10,
        marginLeft: 10,
        color: 'black',
        alignContent: 'center',
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
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
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20
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
        marginTop: 15,
        marginBottom: 5
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
    },
    enrollText: {
      fontWeight: 'bold',
      color: 'black',
      alignContent: 'center',
      fontSize: 30
    },
    biglessSpace: {
      marginBottom: -50
    },
    smolHorizontalLine: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '60%',
      alignItems: 'center',
      marginBottom: 20
    },
    theLogos:{
      height: 40,
      width: 33,
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 2,
      marginRight: 2
    },
    logos: {
      height: 60,
      width: 60
    },
    makeCenter: {
      alignContent: 'center'
    }
    
});
 
export default About;
