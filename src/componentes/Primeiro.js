import React from "react";
import { Text, SafeAreaView } from "react-native";

import UsuarioLogado from "./UsuarioLogado";
import ImparPar from "./ImparPar";
import MInMax from "./MInMax";
import Diferenciar from "./Diferenciar";
import Contadorv2 from "./contador/Contadorv2";
import Estilo from "./estilo"
import Aleatorio from './aleatorio';
import Botao from "./Botao";
import Contador from "./Contador";
import Pai from "./direta/Pai";
import Pai2 from "./indireta/Pai";
import ListaProdutosV2 from "./produtos/ListaProdutosV2";
import DigiteSeuNome from "./DigiteSeuNome";
import FlexboxV1 from "./layout/FlexboxV1";
import FlexboxV2 from "./layout/FlexboxV2";
import Mega from "./mega/Mega";

export default () =>
    <SafeAreaView>
        <Mega qtdeNumeros={8}></Mega>
        {/*<DigiteSeuNome></DigiteSeuNome>
        <FlexboxV2/>
        <FlexboxV1/>
        <ListaProdutosV2></ListaProdutosV2>
        <Text style={Estilo.textoGrande}>Importando primeiro componente2223</Text>
        <UsuarioLogado usuario={{nome: "Vitor", email:"vitorsibin@hotmail.com"}}></UsuarioLogado>
        <UsuarioLogado usuario={{}}></UsuarioLogado>
        <ImparPar num={3}></ImparPar>
        <Diferenciar></Diferenciar>
        <Contadorv2></Contadorv2>
        <Pai2></Pai2>
        <MInMax max="5" min="3"></MInMax>
        <MInMax max="10" min="9"></MInMax>

        <Aleatorio min="1" max="4"></Aleatorio>
        <Aleatorio min="6" max="10"></Aleatorio>
        <Botao></Botao>
        <Contador inicial={1}></Contador>
        <Pai></Pai>*/}
    </SafeAreaView>
