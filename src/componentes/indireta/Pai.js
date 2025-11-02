import React, { useState } from 'react';
import { Text } from 'react-native';
import FIlho from '../indireta/Filho';

export default props => {
    const [numero, setNumero] = useState(0);

    function alterarValor(){
        setNumero(numero + 1);
    }

    return (
        <>
            <Text>Aqui é o elemento pai aqui? {numero}</Text>

            <FIlho ini='Valor Inicial' funcao={alterarValor}></FIlho>
        </>
    )
}