import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import CadastroInput from '../Components/Cadastro/CadastroInput'
import Botao from '../Components/BotaoPadrao'
import TabNavigator from '../routes/tabs'
import Abas from '../routes/abas'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react';


export default function CadastroExame({navigation}){
    
    const [data, setData] = useState(new Date());
    const [mostrar, setMostrar] = useState(false);
    const [hora, setHora] = useState(new Date());
    const [mostrarH, setMostrarH] = useState(false);

  const aoSelecionar = (event, dataSelecionada) => {
    setMostrar(false);
    if (dataSelecionada) {
      setData(dataSelecionada);
    }
  };

  const aoSelecionarH = (event, horaSelecionada)=>{
    setMostrarH(false)
    if(horaSelecionada){
        setHora(horaSelecionada);
    }

  }

    return(
        <SafeAreaView style={styles.container}>
            <Cabecalho local1={()=> navigation.goBack()}/>
           
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}> {/* permite que a tela desça naturalmente sem aparecer a barra ao lado*/}
                 <View style={{marginBottom:50}} ></View>{/*View apenas para espaçamento incial antes dos inputs */}
                <CadastroInput titulo='Nome paciente'/> 

                 <Text style={{fontSize:20, textAlign:'center'}}>Entrada</Text>
                  <TouchableOpacity
                            onPress={() => setMostrarH(true)}
                            style={styles.data}>      
                    <Text>{hora.toLocaleTimeString('pt-Br')}</Text>
                </TouchableOpacity>

                {mostrarH && (
                    <DateTimePicker
                    value={hora}
                    mode="time"
                    display="default"
                    onChange={aoSelecionarH}
                    />
                )}    

                <Text style={{fontSize:20, textAlign:'center'}}>Data prevista para entrega</Text>

                <TouchableOpacity
                            onPress={() => setMostrar(true)}
                            style={styles.data}>      
                    <Text>{data.toLocaleDateString('pt-Br')}</Text>
                </TouchableOpacity>

                {mostrar && (
                    <DateTimePicker
                    value={data}
                    mode="date"
                    display="default"
                    onChange={aoSelecionar}
                    />
                )}               
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
    },
    data:{
         borderWidth: 0,
         borderColor: 'purple',
         borderRadius:8,
         borderBottomWidth:1,
         padding: 15,
         width:'90%',
         marginLeft:16,
         marginBottom:35
    }
}) 