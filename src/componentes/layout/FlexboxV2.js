import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Quadrado from "./Quadrado";

export default props => {
    return (
        <SafeAreaView style={style.FlexV2}>
            <Quadrado/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='purple'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})