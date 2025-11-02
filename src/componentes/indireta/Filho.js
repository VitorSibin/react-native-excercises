import React , {useState} from 'react';
import { Text, Button} from 'react-native';

export default props => {
    const [valor, setValor] = useState(props.ini);

    return (
        <>
            <Text>{valor}</Text>

            <Button
                title='Enviar valor para o pai?'
                onPress={props.funcao}
            ></Button>
        </>
    )
}