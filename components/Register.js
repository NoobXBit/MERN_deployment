import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
 
//INF212_Navigation_CIELO_MAXIENE_TrYffTrsp6711212f

const Register =({navigation})=>{  
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    
    const gotoLogin = () => {
        if (userName.length < 6) {
            alert("Username must be at least 6 characters long.");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
        } else if (password !== rePassword) {
            alert("Password and Re-entered Password must match.");
        } else {
            navigation.navigate('Login', { userName: userName, password: password });
        }
    }
    
    // const gotoAddFriends =()=>{
    //     navigation.navigate('AddFriends');
    // }
    // const gotoAbout =()=>{
    //     navigation.navigate('About', {theValue: "Sample Text"});
    // }

    // const gotoContact =()=>{
    //     navigation.navigate('Contact');
    // }

    return(
    <>
    <Text style = {styles.thisCenter}>INF212_Navigation_CIELO_MAXIENE_TrYffTrsp6711212f</Text>
    <Text style = {styles.headText}> CREATE AN ACCOUNT! </Text>
    <Text>  USERNAME:</Text>
    <TextInput style = {styles.textInput}
        value = {userName}
        onChangeText={(text) => setUserName(text)}
      />
    <Text>  PASSWORD:</Text>
    <TextInput style = {styles.textInput}
        value = {password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry = {true}
    />
    <Text>  RE-ENTER PASSWORD:</Text>
    <TextInput style = {styles.textInput}
        value = {rePassword}
        onChangeText={(text) => setRePassword(text)}
        secureTextEntry = {true}
    />

    <TouchableOpacity onPress = {gotoLogin} style = {styles.btn}>
        <Text style = {{ textAlign: 'center', fontWeight: 'bold'}}>REGISTER</Text>
    </TouchableOpacity>

    {/* <TouchableOpacity onPress = {gotoAddFriends} style = {styles.btn}>
        <Text style = {{ textAlign: 'center', fontWeight: 'bold'}}>ADD FRIENDS</Text>
    </TouchableOpacity> */}

    {/* <TouchableOpacity onPress = {gotoAbout} style = {styles.btn}>
        <Text style = {{textAlign: 'center', fontWeight: 'bold'}} >ABOUT US</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress = {gotoContact} style = {styles.btn}>
        <Text style = {{textAlign: 'center', fontWeight: 'bold'}} >CONTACT US</Text>
    </TouchableOpacity> */}
    </>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 20,
      backgroundColor: '#b1ffc8',
      alignItems: 'center',
      paddingTop: '5%',
      justifyContent: 'to',
    },
    btn:{
        width: '100%',
        height: 45,
        backgroundColor: '#6E7FAE',
        padding: 10,
        marginTop: 10 
    },
    headText: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 400,
        textAlign: 'center'
    },
    thisCenter: {
        alignItems: 'center'
    }
  });
 
export default Register;