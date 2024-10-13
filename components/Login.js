import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

//INF212_Navigation_CIELO_MAXIENE_TrYffTrsp6711212f

const Login = ({ route, navigation }) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const { userName: registeredName, password: registeredPassword } = route.params;

    const gotoAddFriends = () => {
        if (enteredUsername === registeredName && enteredPassword === registeredPassword) {
            console.log("Login successful");
            navigation.navigate('AddFriends');
        } else {
            console.log("Invalid credentials");
            alert(
                "Invalid Credentials",
                "Please enter valid username and password."
            );
        }
    }
    const gotoRegister =()=>{
        navigation.navigate('Register');
    }

    return (
        <>
            <Text style = {styles.thisCenter}>INF212_Navigation_CIELO_MAXIENE_TrYffTrsp6711212f</Text>
            <Text style={styles.headText}> LOGIN TO YOUR ACCOUNT </Text>
            <Text> USERNAME:</Text>
            <TextInput
                style={styles.textInput}
                value={enteredUsername}
                onChangeText={(text) => setEnteredUsername(text)}
            />
            <Text> PASSWORD:</Text>
            <TextInput
                style={styles.textInput}
                value={enteredPassword}
                onChangeText={(text) => setEnteredPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={gotoAddFriends} style={styles.btn}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={gotoRegister} style={styles.btn}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>CANCEL</Text>

            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
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
    btn: {
        width: '100%',
        height: 45,
        backgroundColor: '#6E7FAE',
        padding: 10,
        marginTop: 10
    },
    thisCenter: {
        alignItems: 'center'
    }
});

export default Login;
