import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import Cabecalho from "../Components/Cabecalho/Cabecalho";
import { CreatePaciente } from "../Dao/PacienteDao"; // IMPORT ADICIONADO

export default function CadastroPaciente({ navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [medicamento, setMedicamento] = useState("");
  const [nome_medicamento, setNomeMedicamento] = useState("");

  const handleSalvar = async () => {
    // CORREÇÃO: Removido 'cpf' que não existe
    if (!nome) {
      Alert.alert("Atenção", "Preencha pelo menos o nome!");
      return;
    }

    const novoPaciente = {
      nome,
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
    <SafeAreaView style={styles.container}>
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
          
          {/* CORREÇÃO: medicamento em vez de sexo */}
          <TextInput
            style={styles.input}
            placeholder="Medicamento"
            value={medicamento}
            onChangeText={setMedicamento}
          />
          
          {/* CORREÇÃO: nome_medicamento em vez de nome */}
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
    </SafeAreaView>
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
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    padding: 15,
    width: "100%",
    marginBottom: 15,
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