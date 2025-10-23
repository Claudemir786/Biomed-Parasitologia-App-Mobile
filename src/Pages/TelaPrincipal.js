  import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { StyleSheet, View, ScrollView } from 'react-native';
  import Cabecalho from '../Components/Cabecalho/Cabecalho';
  import Card from '../Components/Cards/Card';
  import { SafeAreaView } from 'react-native-safe-area-context';

  export default function Inicio({ navigation }) {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Cabecalho />
          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            <Card
              titulo="Consulta"
              subtitulo="Aqui você pode consultar seus pacientes"
              imagem={require("../Assets/img/cardAluno.png")}
              local={() => navigation.getParent()?.navigate("ConsultaPacientes")}
            />
            <Card
              titulo="Cadastro de exames"
              subtitulo="Aqui você vai cadastrar seus pacientes"
              imagem={require("../Assets/img/cardAlunoo.png")}
              local={() => navigation.navigate("CadastroPaciente")}
            />
            <Card
              titulo="Cadastro de exames"
              subtitulo="Aqui você vai cadastrar seus exames"
              imagem={require("../Assets/img/Exame1.png")}
              local={() => navigation.navigate("CadastroExame")}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E3E6E0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 1,
      backgroundColor: '#E3E6E0',
      width: '90%',
    },
  });
