import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native';
import Cabecalho from '../Components/Cabecalho/Cabecalho';
import Card from '../Components/Cards/Card';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Cabecalho/>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false} >
          <Card
            titulo={"Cadastro de Pacientes"}
            subtitulo={"Aqui você vai cadastrar seus pacientes"}
            imagem={require("../Assets/img/CARD_2_ALUNO.png")}
          /> 
          <Card
           titulo={"Consulta"}
           subtitulo={"Aqui você pode consultar seus pacientes"}
           imagem={require("../Assets/img/CARD_1_ALUNO.png")}
          /> 
          <Card
           titulo={"Cadastro de exames"}
           subtitulo={"Aqui você vai cadastrar seus exames"}
           imagem={require("../Assets/img/Exame1.png")}
          /> 
        </ScrollView>
        <View style={{marginTop:10}}>
            
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E6E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    flex: 1,
    backgroundColor:'#E3E6E0',
    width:'90%',

    
  }
});
