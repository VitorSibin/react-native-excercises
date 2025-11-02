import React from "react";
import { Text, TextInput, Button} from "react-native";

export default class Mega extends React.Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtdeNumeros: +qtde}); //+ para ser um valor inteiro
    }

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;

        return nums.includes(novo)? this.gerarNumerosNaoContido(nums) : novo;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
            .sort((a, b) => a - b);
        this.setState({ numeros })
    }

    render(){
        return (
            <>
                <Text>O valor é {this.state.qtdeNumeros}</Text>

                <TextInput
                    keyboardType={"numeric"}
                    value={this.state.qtdeNumeros}
                    placeholder="Quantidade Numeros"
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                ></TextInput>

                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                ></Button>

                <Text>{this.state.numeros.join(',')}</Text>
            </>
        )
    }
}