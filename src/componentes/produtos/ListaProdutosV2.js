import React from 'react';
import { Text , FlatList, SafeAreaView} from 'react-native';

import Produtos from './Produtos';

export default props => {
    function productRender ({item: p}){
        return <Text key={p.id}>{p.id}) {p.nome} tem preçc R${p.valor}</Text>
    }

    return (
        <SafeAreaView>
            <Text>Lista de produtos</Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={productRender}
            ></FlatList>
        </SafeAreaView>
    )
}