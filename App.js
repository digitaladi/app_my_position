import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import Home from './screens/Home';
import Rules from './screens/Rules';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
const Tabs = createBottomTabNavigator()
const home = 'Accueil'
const rules = 'régles de confidentialité'







/*
DEPLOYER SON APPLICATION SUR GOOGLE PLAY
Pour deployer son appplication sur google app qui uilise des données de localisation il faut faire une regle de confidentialité : 
ici exemple le screen Rules
*/








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

})










  return (

//pour initier la navigation
      <NavigationContainer>
{/* type de navigation */}
    <Tabs.Navigator 
      initialRouteName={home}
    

      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
          let iconName;
          let routeName = route.name;

          if(routeName === home){
            iconName =focused ? iconName = 'home' : iconName = 'home-outline'

          }else if(routeName === rules){
            iconName = focused ? 'receipt' : 'receipt-outline'
          }


          return (
            <Ionicons name={iconName} color={color} size={size}/>
          )
        }
      })
      
      
      
      
      }

    
    >


<Tabs.Screen  name={home} component={Home}/>
<Tabs.Screen  name={rules} component={Rules}/>
 


    </Tabs.Navigator>


      </NavigationContainer>



  );













  





  
}










