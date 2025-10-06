import {TouchableOpacity, Text, View, StyleSheet } from "react-native";

//função com parametros de estilização para o botão
export default function Botao({corBotao='#fff', corTexto = '#000', titulo='CADASTRAR', local}){

    
    return(
        //aqui os parametros passados são em forma de array, um diretamente em line e o outro é a personalizão feita na const abaixo
        <TouchableOpacity 
        style={[styles.container, {backgroundColor:corBotao}]}
        onPress={local} //variavel local é usada para navegar para outra pagina, ou seja, dependendo da onde for usada ela vai levar pra outro local
        >
            <Text style={[styles.titulo, {color:corTexto}]}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{        
        justifyContent:'center',
        alignItems:'center',
        marginLeft:70,
        marginRight:70,
        padding:17,
        borderRadius:20,
       

    },
    titulo:{
        fontSize:20,
        fontWeight:'bold'
    }
})