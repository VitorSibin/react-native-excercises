import React, { useState } from 'react';
import { Text } from 'react-native';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default props => {
    const [valor, setValor] = useState(0);

    let incremento = () => {
        setValor(valor + 1);
    }

    let decremento = () => {
        setValor(valor - 1);
    }

    return (
        <>
            <Text>Contador</Text>
            <ContadorDisplay ini={valor}></ContadorDisplay>
            <ContadorBotoes incremento={incremento} decremento={decremento}></ContadorBotoes>
        </>
    )
}