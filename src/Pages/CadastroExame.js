import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'
import CadastroInput from '../Components/Cadastro/CadastroInput'
import Botao from '../Components/BotaoPadrao'
import TabNavigator from '../routes/tabs'
import Abas from '../routes/abas'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react';

export default function CadastroExame({ navigation }) {
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

  const aoSelecionarH = (event, horaSelecionada) => {
    setMostrarH(false);
    if (horaSelecionada) {
      setHora(horaSelecionada);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho local1={() => navigation.goBack()} />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 50 }}></View>

        <View style={styles.box}>
          <Text style={styles.title}>Cadastro de Exame</Text>

          <CadastroInput  titulo='Nome paciente' />

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

          <CadastroInput titulo='Tipo de amostra' />
          <CadastroInput titulo='Técnica utilizada' />
          <CadastroInput titulo='Consistência' />
          <CadastroInput titulo='Coloração' />
          <CadastroInput titulo='Muco' />
          <CadastroInput titulo='Sangue' />
          <CadastroInput titulo='Parasita' />
          <CadastroInput titulo='Responsável pelo exame' />
          <CadastroInput titulo='Preceptor responsável' />

          <Botao corBotao='#382c81ff' corTexto='#fff' local={() => navigation.navigate('Laudo')} />
        </View>

        <View style={{ marginBottom: 70 }}></View>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 18,
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
