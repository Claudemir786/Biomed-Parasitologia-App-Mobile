import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import CadastroInput from '../Components/Cadastro/CadastroInput'
import Botao from '../Components/BotaoPadrao'
import TabNavigator from '../routes/tabs'
import Abas from '../routes/abas'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react';
import Create from '../Dao/ExameDao'



export default function CadastroExame({ navigation }) {
  //Hora e data
  const [data, setData] = useState(new Date());
  const [mostrar, setMostrar] = useState(false);
  const [hora, setHora] = useState(new Date());
  const [mostrarH, setMostrarH] = useState(false);

  //Campos de texto
  const [nomeP,setNomeP] = useState("");
  const [tipoAmostra,setTipoAmostra] = useState("");
  const [tecnica,setTecnica] = useState("");
  const [consistencia,setConsistencia] = useState("");
  const [sangue,setSangue] = useState("");
  const [coloracao,setColoracao] = useState("");
  const [muco,setMuco] = useState("");
  const [parasita,setParasita] = useState("");
  const [aluno,setAluno] = useState("");
  const [professor,setProfessor] = useState("");
   

  const aoSelecionar = (event, dataSelecionada) => {
    setMostrar(false);
    if (dataSelecionada) {
      setData(dataSelecionada);
    }
  };

  const aoSelecionarH = (event, horaSelecionada) => {
    setMostrarH(false);
    if (horaSelecionada) {
      setHora(horaSelecionada);
    }
  };

  async function handleCreate(){
    try{
    if(!data || !hora || !nomeP || !tecnica || !tipoAmostra || !consistencia || !sangue || !coloracao || !muco || !parasita || !aluno || !professor){
      console.log("os campos não foram digitados")
      alert("Preencha todos os campos antes de enviar")

    }else{
      console.log("os campos foram digitados corretamente");
      await Create({cdata: data,chora: hora, ctecnica:tecnica, ctipoAmostra: tipoAmostra, cconsistencia: consistencia, csangue: sangue, ccolocarcao:coloracao, cmuco:muco,
        cparasita:parasita, caluno:aluno,cprofessor:professor});
      
      alert("cadastro Realizado com sucesso");
      navigation.navigate("Laudo");    
    }
    }catch(erro){
      console.log("Erro no handle ", erro);
      alert("Erro: cadastro de exame não funcionou");
    }

  }
  return (
    <View style={styles.container}>
      <Cabecalho local1={() => navigation.goBack()} />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 50 }}></View>

        <View style={styles.box}>
          <Text style={styles.title}>Cadastro de Exame</Text>

          <CadastroInput  titulo='Nome paciente' campo={setNomeP}/>

          <Text style={styles.subTitle}>Entrada</Text>
          <TouchableOpacity onPress={() => setMostrarH(true)} style={styles.input}>
            <Text style={styles.inputText}>{hora.toLocaleTimeString('pt-Br')}</Text>
          </TouchableOpacity>
          {mostrarH && (
            <DateTimePicker value={hora} mode="time" display="default" onChange={aoSelecionarH} />
          )}

          <Text style={styles.subTitle}>Data prevista para entrega</Text>
          <TouchableOpacity onPress={() => setMostrar(true)} style={styles.input}>
            <Text style={styles.inputText}>{data.toLocaleDateString('pt-Br')}</Text>
          </TouchableOpacity>
          {mostrar && (
            <DateTimePicker value={data} mode="date" display="default" onChange={aoSelecionar} />
          )}

          <CadastroInput titulo='Tipo de amostra' campo={setTipoAmostra}/>
          <CadastroInput titulo='Técnica utilizada' campo={setTecnica}/>
          <CadastroInput titulo='Consistência' campo={setConsistencia} />
          <CadastroInput titulo='Coloração' campo={setColoracao} />
          <CadastroInput titulo='Muco' campo={setMuco} />
          <CadastroInput titulo='Sangue' campo={setSangue} />
          <CadastroInput titulo='Parasita' campo={setParasita} />
          <CadastroInput titulo='Responsável pelo exame' campo={setAluno} />
          <CadastroInput titulo='Preceptor responsável'  campo={setProfessor}/>
          

          <Botao corBotao='#382c81ff' corTexto='#fff'
           local={() => handleCreate()}/>
        </View>

        <View style={{ marginBottom: 70 }}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    width: '100%',
  },
  box: {
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#382c81ff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: '#444',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
});

