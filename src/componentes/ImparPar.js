import React from 'react';
import { View, Text } from 'react-native';

export default props => {
    return (
        <View>
            {props.num % 2 === 0
                ? <Text>Par</Text>
                : <Text>Ímpar</Text>
            }
        </View>
    )
}