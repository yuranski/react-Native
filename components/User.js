import React from "react";
import {StyleSheet} from "react-native"
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = (props) => {

    let {item, nav: {navigate}} = props

    let click = () => {
        console.log(item)
        navigate('UDetPage', {data:item})
    }

    return <View style={[styles.userBox,styles.margins]}>
        <Text>{item.name}</Text>
        <Button title={'user test'} onPress={click}/>
    </View>
}

export default User;

let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: '#faa',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    margins: {
        height: 200
    }
});