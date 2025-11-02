import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default props => {
    return (
        <View style={style.Display}>
            <Text style={style.Texto}>{props.ini}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 150
    },
    Texto: {
        color: '#FFF'
    }
})