import React from 'react';
import { Text, View,SafeAreaView, StyleSheet } from 'react-native';

import Primeiro from './componentes/Primeiro';

export default () =>
    <SafeAreaView style={style.App}>
        <Primeiro />
    </SafeAreaView>


const style = StyleSheet.create({
    App: {
        backgroundColor: "#fff",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})