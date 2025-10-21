import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import Cabecalho from "../Components/Cabecalho/Cabecalho";

export default function ConsultaPaciente({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [exames, setExames] = useState([]);

  // Exemplo de dados simulados
  const pacientesMock = [
    {
      nome: "João da Silva",
      cpf: "12345678900",
      exames: [
        { tipo: "Exame de Fezes", status: "Em processo" },
        { tipo: "Hemograma", status: "Concluído" },
      ],
    },
    {
      nome: "Maria Oliveira",
      cpf: "98765432100",
      exames: [
        { tipo: "Exame de Sangue", status: "Concluído" },
      ],
    },
  ];

  const buscarPaciente = () => {
    if (!cpf) {
      Alert.alert("Atenção", "Digite o CPF para buscar o paciente!");
      return;
    }

    const encontrado = pacientesMock.find((p) => p.cpf === cpf);
    if (encontrado) {
      setPaciente(encontrado);
      setExames(encontrado.exames);
    } else {
      setPaciente(null);
      setExames([]);
      Alert.alert("Ops!", "Nenhum paciente encontrado com esse CPF.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho local1={() => navigation.goBack()} />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 50 }}></View>

        <View style={styles.box}>
          <Text style={styles.title}>Consulta de Paciente</Text>

          <Text style={styles.subTitle}>Digite o CPF do paciente</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 12345678900"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />

          <TouchableOpacity style={styles.botao} onPress={buscarPaciente}>
            <Text style={styles.textoBotao}>Buscar</Text>
          </TouchableOpacity>

          {paciente && (
            <View style={styles.resultado}>
              <Text style={styles.nomePaciente}>{paciente.nome}</Text>
              <Text style={styles.cpfPaciente}>CPF: {paciente.cpf}</Text>

              <Text style={styles.tituloExames}>Exames</Text>
              {exames.map((exame, index) => (
                <View key={index} style={styles.cardExame}>
                  <Text style={styles.tipoExame}>{exame.tipo}</Text>
                  <Text
                    style={[
                      styles.statusExame,
                      exame.status === "Concluído"
                        ? { color: "green" }
                        : { color: "orange" },
                    ]}
                  >
                    {exame.status}
                  </Text>
                </View>
              ))}
            </View>
          )}
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
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#382c81ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultado: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 15,
  },
  nomePaciente: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#382c81ff",
    textAlign: "center",
  },
  cpfPaciente: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  tituloExames: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cardExame: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  tipoExame: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  statusExame: {
    fontSize: 14,
    marginTop: 5,
  },
});
