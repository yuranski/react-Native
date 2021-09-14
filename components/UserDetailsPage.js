import React from "react";
import {StyleSheet} from "react-native"
import {View, Text, Button, TouchableOpacity} from "react-native";

const UserDetailsPage = (props) => {

    let {route: {params: {data}}, navigation} = props
    return <View>
        <Text>{data.name} - {data.email}</Text>
    </View>
}

export default UserDetailsPage;

let styles = StyleSheet.create({});