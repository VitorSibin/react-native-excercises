import React from 'react';
import { Text } from 'react-native';

import Produtos from './Produtos';

export default props => {

    function lista (){
        return Produtos.map(p => {
                return <Text key={p.id}>{p.id}) {p.nome} tem preço R${p.valor}</Text>
            })
    }

    return (
        <>
            <Text>Lista de produtos</Text>
            {lista()}
        </>
    )
}