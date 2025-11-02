import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Quadrado from "./Quadrado";

export default props => {
    return (
        <SafeAreaView style={style.FlexV1}>
            <Quadrado/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='purple'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        //flex: 1,
        flexGrow: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#000'
    }
})