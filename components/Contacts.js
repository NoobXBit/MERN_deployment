import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
 
const Contacts =()=>{  
 
    return(
        <View style={styles.container}>
            <Text style={styles.headText}>Contacts u MF</Text>
        </View>
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
    headText: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });
 
export default Contacts;