import {View, Text, StyleSheet,SafeAreaView, ScrollView, FlatList} from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import Botao from '../Components/BotaoPadrao'

const dadosTeste = [{
    "id": 1, "paciente": "Maria", "dataExame": "13-12-2024", "entrada": "14:00", "tipoAmostra": "teste",
    "tecnica": "test", "consistencia": "teste", "sangue": "teste", "coloracao": "teste", "muco": "sim", "parasita":"teste",
    "alunoResponsavel": "Raquel", "professorResponsavel": "Claudemir Junior"
}]

const Lista = ({exame}) =>{

    return(
        <View style={{marginBottom:50}}>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Paciente ID: </Text>
                <Text style={styles.dadosReturm}>Teste {exame?.id}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Paciente:</Text>
                <Text style={styles.dadosReturm}>{exame?.paciente}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Data do Exame:</Text>
                <Text style={styles.dadosReturm}>{exame?.dataExame}</Text>
            </View >
              <View style={styles.linha}>
                <Text style={styles.subtitulo}>Entrada:</Text>
                <Text style={styles.dadosReturm}>{exame?.entrada}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Tipo de Amostra:</Text>
                <Text style={styles.dadosReturm}>{exame?.tipoAmostra}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Tecnica:</Text>
                <Text style={styles.dadosReturm}>{exame?.tecnica}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Consistencia:</Text>
                <Text style={styles.dadosReturm}>{exame?.consistencia}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Sangue:</Text>
                <Text style={styles.dadosReturm}>{exame?.sangue}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Coloração:</Text>
                <Text style={styles.dadosReturm}>{exame?.coloracao}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Muco:</Text>
                <Text style={styles.dadosReturm}>{exame?.muco}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Parasita:</Text>
                <Text style={styles.dadosReturm}>{exame?.parasita}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Aluno Responsavel:</Text>
                <Text style={styles.dadosReturm}>{exame?.alunoResponsavel}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Professor Responsavel:</Text>
                <Text style={styles.dadosReturm}>{exame?.professorResponsavel}</Text>
            </View>
         
            
        </View>
    )

}

export default function Laudo({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <Cabecalho local1={()=> navigation.navigate("TabNavigator")}/>

            <ScrollView style={styles.body}>

                <View style={styles.titulo}> 

                    <Text style={{fontSize:25, fontWeight:'bold'}}>Dados do Exame</Text>

                </View>             
               
                     <FlatList

                        data={dadosTeste}                       
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <Lista exame={item} />}
                    
                    />

                <Botao titulo='EXCLUIR EXAME' corBotao='red' corTexto='#fff'/>
                <View style={{marginBottom:15}}></View>
                <Botao titulo='EDITAR EXAME' corBotao='#0D6EFD' corTexto='#fff'/>
                <View style={{marginBottom:80}}></View>    
     
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
         flex: 1,
        backgroundColor:'#E3E6E0',
        width:'100%'
        
    },
    titulo:{
        marginTop:15, 
        alignItems:'center', 
        justifyContent:'center', 
        marginBottom:15
    },
    linha:{
        flexDirection:'row',
        alignItems:'flex-start',
        borderBottomWidth:2,
        borderColor:'#3f319cff',
        marginBottom:5,
        padding:15,        
        width:'95%',
        marginLeft:8,
        borderRadius:8,
        flexWrap:'wrap'
        
        

    },
    subtitulo:{
        fontWeight:'bold',
        fontSize:20
    }, 
    dadosReturm:{
        fontSize:20,
        marginLeft:5,
    }
})