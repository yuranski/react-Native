import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import UserDetailsPage from "./components/UserDetailsPage";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserPageNavigator from "./components/UserPageNavigator";

// let StackNavigator = createStackNavigator()

let BottomTabNavigator = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
        <BottomTabNavigator.Navigator>
          <BottomTabNavigator.Screen name={'users'} component={UserPageNavigator} options={{
              headerShown: false
          }}/>
          <BottomTabNavigator.Screen name={'home'} component={Home}/>
        </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',

  },


});

