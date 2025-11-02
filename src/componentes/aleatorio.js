import React from "react";
import { Text, View } from "react-native";
//import Math from 

export default (props) => {
    let {min, max } = props;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let numero = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    return (
        <View>
            <Text>{numero}</Text>
            <Text>{numero}</Text>
            <Text>{numero}</Text>
        </View>
    )
}