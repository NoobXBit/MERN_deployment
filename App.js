import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComponent from './components/LoginComponent';
import WayHome from './components/WayHome';
import OwnExplore from './components/OwnExplore';
import SearchExplore from './components/SearchExplore';
import Discover from './components/Discover'
import Start from './components/Start';
import Verification from './components/Verification';
import ScanQR from './components/ScanQR';
import Search from './components/Search';
import About from './components/About';
import NewStart from './components/NewStart';
import Profile from './components/Profile';
import RegisterComp from './components/RegisterComp';

export default function App() {
 
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Start'>
        <Stack.Screen
            name = 'Start'
            component = {Start}
        />
        <Stack.Screen
            name = 'Register'
            component =  {RegisterComp}
        />
        <Stack.Screen
            name = 'Login'
            component =  {LoginComponent}
        />
        <Stack.Screen
            name = 'Verification'
            component = {Verification}
        />
        <Stack.Screen
            name = 'Explore'
            component =  {OwnExplore}
        />
        <Stack.Screen
            name = 'Search'
            component =  {SearchExplore}
        />
        <Stack.Screen
            name = 'Home'
            component =  {WayHome}
        />
        <Stack.Screen
            name = 'ScanQR'
            component =  {ScanQR}
        />
        <Stack.Screen
            name = 'Discover'
            component = {Discover}
        />
        <Stack.Screen
            name = 'GoSearch'
            component =  {Search}
        />
        <Stack.Screen
            name = 'About'
            component =  {About}
        />
        <Stack.Screen
            name = 'NewStart'
            component =  {NewStart}
        />
        <Stack.Screen
            name = 'Profile'
            component =  {Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}