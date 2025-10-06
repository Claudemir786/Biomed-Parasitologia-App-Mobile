import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import CadastroInput from '../Components/Cadastro/CadastroInput'
import Botao from '../Components/BotaoPadrao'



export default function CadastroExame({navigation}){
    

    return(
        <SafeAreaView style={styles.container}>
            <Cabecalho local1={()=> navigation.goBack()}/>
           
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}> {/* permite que a tela desça naturalmente sem aparecer a barra ao lado*/}
                 <View style={{marginBottom:50}} ></View>{/*View apenas para espaçamento incial antes dos inputs */}
                <CadastroInput titulo='Nome paciente'/>
                <CadastroInput titulo='Entrada' />
                <CadastroInput titulo='Data prevista para entrega'/>                
                <CadastroInput titulo='Tipo de amostra'/>
                <CadastroInput titulo='Técnica utilizada'/>
                <CadastroInput titulo='Consistencia'/>
                <CadastroInput titulo='Coloração'/>
                <CadastroInput titulo='Muco'/>
                <CadastroInput titulo='Sangue'/>
                <CadastroInput titulo='Parasita'/>
                <CadastroInput titulo='Responsável pelo o exame'/>
                <CadastroInput titulo='Preceptor Responsavel'/>
                <Botao corBotao='#0D6EFD' corTexto='#fff' local={()=> navigation.navigate('Laudo')}/>
                <View style={{marginBottom:70}} ></View> {/*View apenas para espaçamento final depois dos inputs */}    
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E3E6E0',
    },

    body:{
        flex:1,
        width:"90%",
    }
}) 