import {View, Text, StyleSheet,SafeAreaView, ScrollView, FlatList, SafeAreaViewBase} from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import Botao from '../Components/BotaoPadrao'
import { Read, ReadpacienteId } from '../Dao/ExameDao'
import {useState, useEffect} from 'react'

const Lista = ({exame, nome}) =>{

    return(
        <View style={{marginBottom:50}}>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Paciente ID: </Text>
                <Text style={styles.dadosReturm}>{exame?.id}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Paciente:</Text>
                <Text style={styles.dadosReturm}>{nome}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Data do Exame:</Text>
                <Text style={styles.dadosReturm}>{exame?.data_exame}</Text>
            </View >
              <View style={styles.linha}>
                <Text style={styles.subtitulo}>Entrada:</Text>
                <Text style={styles.dadosReturm}>{exame?.entrada}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Tipo de Amostra:</Text>
                <Text style={styles.dadosReturm}>{exame?.tipo_amostra}</Text>
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
                <Text style={styles.dadosReturm}>{exame?.aluno_id}</Text>
            </View>
            <View style={styles.linha}>
                <Text style={styles.subtitulo}>Professor Responsavel:</Text>
                <Text style={styles.dadosReturm}>{exame?.professor_id}</Text>
            </View>
         
            
        </View>
    )

}

export default function Laudo({navigation, route}){
    if(route){
        const {id} = route.params;
        const [exame,setExame] = useState([]);
        const [nome, setNome] = useState("");

        useEffect(() => {
            handleId(); //espera a primeira rodar para encontrar o id paciente
   
        },[]);

        async function handleId(){
            try{
                const dadosExame = await Read(id);

                if(dadosExame){
                    console.log("dados retornado da Dao exame: ", dadosExame);
                    setExame(dadosExame);
                    const idPaciente = dadosExame[0].paciente_id;//pega o id de paciente
                    console.log("id do paciente: ", idPaciente);

                    const nomeP = await handleBuscanome(idPaciente);//chama a função para buscar o nome pelo id
                    if(nomeP){
                        console.log("nome do paciente: ", nomeP);
                        setNome(nomeP);
                    }else{
                        console.error("Erro ao setar nome do paciente");
                    }
                   
                }else{
                    console.error("erro ao voltar dados da Dao exame")
                }

            }catch(erro){
                console.error("erro ao trazer dados de exame para a página");
            }
        }

        async function handleBuscanome(id){
            try{               
                console.log("cheguei aqui")
                const nomePaciente = await ReadpacienteId(id);

                if(nomePaciente){
                    console.log("nome do paciente: ", nomePaciente)
                    return nomePaciente.nome;
                    
                }else{
                    return false;
                }

            }catch(erro){
                console.log("erro ao trazer o nome do paciente: ", erro);
            }
        }


        return(
            <View style={styles.container}>
                <Cabecalho local1={()=> navigation.navigate("TabNavigator")}/>

                <ScrollView style={styles.body}>

                    <View style={styles.titulo}> 

                        <Text style={{fontSize:25, fontWeight:'bold', color:"#382c81ff"}}>Dados do Exame</Text>

                    </View>             
                
                        <FlatList

                            data={exame}                       
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => <Lista exame={item} nome={nome} />}
                            scrollEnabled={false}
                        
                        />

                    <Botao titulo='EXCLUIR' corBotao='#750202ff' corTexto='#fff'/>
                    <View style={{marginBottom:15}}></View>
                    <Botao titulo='EDITAR' corBotao='#382c81ff' corTexto='#fff'/>
                    <View style={{marginBottom:80}}></View>    
        
                </ScrollView>  
                <Text>Valor enviado da outra pagina {id}</Text>  
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
            <Cabecalho local1={()=> navigation.navigate("TabNavigator")}/>

            <ScrollView style={styles.body}>

                <View style={styles.titulo}> 

                    <Text style={{fontSize:25, fontWeight:'bold', color:"#382c81ff"}}>Dados do Exame</Text>

                </View>         
                <Text style={{fontSize:20, marginBottom:20, textAlign:'center'}}>Não foram encontrados dados de exame valido </Text>
                <Botao titulo='VOLTAR' corBotao='#750202ff' corTexto='#fff' local={()=> navigation.navigate("Inicio")}/>
                <View style={{marginBottom:15}}></View>
                  
     
            </ScrollView>  
            
        </View>
    )
        
    }
   
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E3E6E0',
    },
    body:{
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 40,
        paddingHorizontal: 25,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
        marginBottom: 30,
        
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
        borderBottomWidth:1,
        borderColor:'#d8cbcbff',
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