import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const AddFriends = ({ navigation }) => {
    const [friendName, setFriendName] = useState('');
    const [friendAge, setFriendAge] = useState('');
    const [friendList, setFriendList] = useState([]);

    const addFriend = () => {
        if (friendName.length < 3) {
            alert("Friend name must be at least 3 characters long.");
            return;
        }
        let ageStatus = "Adult";
        if (parseInt(friendAge) < 18) {
            ageStatus = "Minor";
        }
        const newFriend = `${friendName} - ${ageStatus}`;
        setFriendList([...friendList, newFriend]);
        setFriendName('');
        setFriendAge('');
    };

    const clearInput = () => {
        setFriendName('');
        setFriendAge('');
    };

    const logoutHandler = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.thisCenter}>INF212_Navigation_CIELO_MAXIENE_TrYffTrsp6711212f</Text>
            <Text style={styles.headText}>MY FRIENDS</Text>
            <Text>  Add Friend Name:</Text>
            <TextInput
                style={styles.textInput}
                value={friendName}
                onChangeText={(text) => setFriendName(text)}
            />
            <Text>  Add Age:</Text>
            <TextInput
                style={styles.textInput}
                value={friendAge}
                onChangeText={(text) => setFriendAge(text)}
                keyboardType="numeric"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={addFriend} style={styles.button}>
                    <Text style={styles.buttonText}>ADD FRIEND</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearInput} style={[styles.button, styles.cancelButton]}>
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.headText}>Friend List:</Text>
            {friendList.map((friend, index) => (
                <Text key={index}>{friend}</Text>
            ))}
            <TouchableOpacity onPress={logoutHandler} style={[styles.button, styles.logoutButton]}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        backgroundColor: '#b1ffc8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 5,
        padding: 10,
        width: 200,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#6E7FAE',
        padding: 10,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    logoutButton: {
        backgroundColor: 'blue',
        marginTop: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
    },
    thisCenter: {
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default AddFriends;
