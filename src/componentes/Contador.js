import React, { useState } from "react";
import { Text, Button } from 'react-native';

export default ({inicial = 0}) => {
    const [valor, setValor] = useState(inicial);

    function soma (){
        setValor(valor + 1);
    }

    function subtrai(){
        setValor(valor - 1);
    }

    return (
        <>
            <Text>o numero é {valor}</Text>
            <Button title='+' onPress={soma}></Button>
            <Button title='-' onPress={subtrai}></Button>
        </>
    )
}
