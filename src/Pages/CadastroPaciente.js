import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import Cabecalho from "../Components/Cabecalho/Cabecalho";
import { CreatePaciente } from "../Dao/PacienteDao";
import DateTimePicker from '@react-native-community/datetimepicker';

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '6tb6tb6tb', // ← ADICIONE SUA SENHA
    database: 'clinicode',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;

export default function CadastroPaciente({ navigation }) {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState(new Date());
  const [mostrarData, setMostrarData] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [nome_medicamento, setNomeMedicamento] = useState("");

  // Função para selecionar data
  const aoSelecionarData = (event, dataSelecionada) => {
    setMostrarData(false);
    if (dataSelecionada) {
      setDataNasc(dataSelecionada);
    }
  };

  const handleSalvar = async () => {
    if (!nome) {
      Alert.alert("Atenção", "Preencha pelo menos o nome!");
      return;
    }

    const novoPaciente = {
      nome,
      dataNasc: dataNasc.toISOString().split('T')[0], // Formato YYYY-MM-DD
      telefone,
      email,
      nomeMae,
      medicamento,
      nome_medicamento,
    };

    try {
      const resultado = await CreatePaciente(novoPaciente);
      
      if (resultado) {
        console.log("Paciente cadastrado:", resultado);
        Alert.alert("Sucesso", "Paciente cadastrado com sucesso!");
        navigation.goBack();
      } else {
        Alert.alert("Erro", "Não foi possível cadastrar o paciente");
      }
    } catch (erro) {
      console.error("Erro ao cadastrar paciente:", erro);
      Alert.alert("Erro", "Erro ao cadastrar paciente");
    }
  };

  return (
    <View style={styles.container}>
      <Cabecalho local1={() => navigation.goBack()} />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.title}>Cadastro de Paciente</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
          />
          <TouchableOpacity onPress={() => setMostrarData(true)} style={styles.input}>
            <Text style={styles.inputText}>
              {dataNasc.toLocaleDateString('pt-BR')}
            </Text>
          </TouchableOpacity>
          {mostrarData && (
            <DateTimePicker 
              value={dataNasc} 
              mode="date" 
              display="default" 
              onChange={aoSelecionarData} 
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome da Mãe"
            value={nomeMae}
            onChangeText={setNomeMae}
          />
          <TextInput
            style={styles.input}
            placeholder="Medicamento"
            value={medicamento}
            onChangeText={setMedicamento}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Medicamento"
            value={nome_medicamento}
            onChangeText={setNomeMedicamento}
          />

          <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 70 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f7fb",
  },
  body: {
    flex: 1,
    width: "100%",
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#382c81ff",
    textAlign: "center",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    padding: 15,
    width: "100%",
    marginBottom: 15,
  },
  inputText: {
    fontSize: 16,
    color: "#333",
  },
  botao: {
    backgroundColor: "#382c81ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});