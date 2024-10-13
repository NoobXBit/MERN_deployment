import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
 
const Home =({navigation})=>{  

const gotoAbout =()=>{
    navigation.navigate('About', {theValue: "Sample Text"});
}

const gotoContact =()=>{
    navigation.navigate('Contact');
}

    return(
    <>
    <Text style = {styles.headText}>HOME</Text>
    <Text>INSERT EXPLORE ON YOUR OWN</Text>
    <TouchableOpacity onPress = {gotoAbout} style = {styles.btn}>
        <Text style = {{textAlign: 'center', fontWeight: 'bold'}} >PROCEED</Text>
    </TouchableOpacity>

    <Text>INSERT EXPLORE BY SEARCH</Text>
    <TouchableOpacity onPress = {gotoContact} style = {styles.btn}>
        <Text style = {{textAlign: 'center', fontWeight: 'bold'}} >PROCEED</Text>
    </TouchableOpacity>
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
        height: 30,
        backgroundColor: '#6E7FAE',
        padding: 10,
        marginTop: 10 
    },
    headText: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });
 
export default Home;