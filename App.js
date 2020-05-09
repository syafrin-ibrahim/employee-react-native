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
import  FormEmploye from './screens/FormEmploye';
import Profile from './screens/Profile';


function App (){
  
    return( 
            
            <View style={styles.parent}>
              {/* <FormEmploye /> */}
            
              {/* <Home /> */}
              <Profile />
              </View>
              
            );
    
    
}

const styles = StyleSheet.create({
  parent : {
  backgroundColor : 'lime',
  
  flex : 1
  

  
    
  }
 
  

})

export default App;
