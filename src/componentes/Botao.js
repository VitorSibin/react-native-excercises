import React from "react";
import { Button } from "react-native";

export default () => {

    function funcao1 () {
        console.log('clicou no botao 1');
    }

    return (
        <>
            <Button
                title="Botao1"
                onPress={funcao1}>

            </Button>

            <Button
                title="Botao2"
                onPress={() => {console.warn('clicou no botao 2');}}>

            </Button>
        </>
    )
}