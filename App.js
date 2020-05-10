/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
 
  StyleSheet,
  
  
  View,
  Text,
  
} from 'react-native';
import Home from './screens/Home';
import 'react-native-gesture-handler';
import  FormEmploye from './screens/FormEmploye';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const myOptions = {
  title : "Home",
  headerTintColor : "white",
  headerStyle : {
    backgroundColor : "#65c1f0"
  }
}
export default function App (){
  
    return( 
            <NavigationContainer>
              <View style={styles.parent}>
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} options={myOptions} />
                  <Stack.Screen name="Profile" component={Profile} options={{...myOptions, title : "Profile"}}/>
                  <Stack.Screen name="Create" component={FormEmploye} options={{ ...myOptions, title: "Add New Kontak"}} />

                </Stack.Navigator>
              
              </View>
            </NavigationContainer>
              
            );
    
    
}



const styles = StyleSheet.create({
  parent : {
  backgroundColor : 'lime',
  
  flex : 1
  

  
    
  }
 
  

})


