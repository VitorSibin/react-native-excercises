import React from 'react';
import { Button } from 'react-native';

export default props => {
    return (
        <>
            <Button title='+' onPress={props.incremento}></Button>
            <Button title='-' onPress={props.decremento}></Button>
        </>

    )
}