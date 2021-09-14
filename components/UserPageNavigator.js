import React from "react";
import {StyleSheet} from "react-native"
import {View, Text, Button, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Users from "./Users";
import UserDetailsPage from "./UserDetailsPage";


let StackNavigator = createStackNavigator()

const UserPageNavigator = (props) => {
    return <StackNavigator.Navigator>
        <StackNavigator.Screen name={'users'} component={Users}/>
        <StackNavigator.Screen name={'UDetPage'} component={UserDetailsPage}/>


    </StackNavigator.Navigator>
}

export default UserPageNavigator;

let styles = StyleSheet.create({});