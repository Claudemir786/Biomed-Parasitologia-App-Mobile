import React, { useState } from "react";
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
import Cabecalho from "../Components/Cabecalho/Cabecalho"; // Cabeçalho

export default function CadastroPaciente({ navigation }) {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");

  const handleSalvar = () => {
    if (!nome || !cpf) {
      Alert.alert("Atenção", "Preencha pelo menos o nome e o CPF!");
      return;
    }

    const novoPaciente = {
      nome,
      dataNascimento,
      sexo,
      cpf,
      telefone,
      endereco,
      cidade,
      estado,
      cep,
      email,
    };

    console.log("Paciente cadastrado:", novoPaciente);
    Alert.alert("Sucesso", "Paciente cadastrado com sucesso!");
    navigation.goBack();
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
            placeholder="Data de nascimento (DD/MM/AAAA)"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
          <TextInput
            style={styles.input}
            placeholder="Sexo (M/F)"
            value={sexo}
            onChangeText={setSexo}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
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
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
          />
          <TextInput
            style={styles.input}
            placeholder="Estado"
            value={estado}
            onChangeText={setEstado}
          />
          <TextInput
            style={styles.input}
            placeholder="CEP"
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
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
    backgroundColor: "#f2f7fb", // mesmo fundo da tela de consulta
  },
  body: {
    flex: 1,
    width: "100%",
  },
  box: {
    backgroundColor: "#fff", // box branco
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
    color: "#382c81ff", // roxo escuro
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
    backgroundColor: "#382c81ff", // roxo escuro
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
