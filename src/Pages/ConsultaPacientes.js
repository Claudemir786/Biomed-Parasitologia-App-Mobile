import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  FlatList
} from "react-native";
import Cabecalho from "../Components/Cabecalho/Cabecalho";
import { SearchPacientePorNome, DeletePaciente } from "../Dao/PacienteDao";
import { FontAwesome } from "@expo/vector-icons";

export default function ConsultaPacientes({ navigation }) {
  const [nome, setNome] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [carregando, setCarregando] = useState(false);

  // Busca automática quando o usuário digita
  useEffect(() => {
    const buscarPacientes = async () => {
      if (nome.length >= 2) {
        setCarregando(true);
        try {
          console.log("Buscando pacientes com:", nome);
          const resultados = await SearchPacientePorNome(nome);
          console.log("Resultados recebidos:", resultados);
          setPacientes(resultados);
        } catch (erro) {
          console.error("Erro na busca:", erro);
          Alert.alert("Erro", "Não foi possível buscar os pacientes");
        } finally {
          setCarregando(false);
        }
      } else {
        setPacientes([]);
      }
    };

    const timeoutId = setTimeout(buscarPacientes, 500);
    return () => clearTimeout(timeoutId);
  }, [nome]);

  const limparBusca = () => {
    setNome("");
    setPacientes([]);
  };

  const handleEditarPaciente = (paciente) => {
    Alert.alert("Editar", `Editar ${paciente.nome}?`);
  };

  const handleExcluirPaciente = (paciente) => {
    Alert.alert(
      "Excluir",
      `Excluir ${paciente.nome}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Excluir", 
          style: "destructive",
          onPress: async () => {
            try {
              const resultado = await DeletePaciente(paciente.id);
              if (resultado) {
                Alert.alert("Sucesso", "Paciente excluído!");
                setPacientes(pacientes.filter(p => p.id !== paciente.id));
              }
            } catch (erro) {
              Alert.alert("Erro", "Erro ao excluir");
            }
          }
        }
      ]
    );
  };

  // Cabeçalho da tabela
  const renderCabecalhoTabela = () => (
    <View style={styles.linhaTabelaCabecalho}>
      <Text style={[styles.coluna, styles.colunaNome, styles.textoCabecalho]}>Nome</Text>
      <Text style={[styles.coluna, styles.colunaData, styles.textoCabecalho]}>Nascimento</Text>
      <Text style={[styles.coluna, styles.colunaTelefone, styles.textoCabecalho]}>Telefone</Text>
      <Text style={[styles.coluna, styles.colunaAcoes, styles.textoCabecalho]}>Ações</Text>
    </View>
  );

  // Item da tabela
  const renderItemTabela = ({ item }) => (
    <View style={styles.linhaTabela}>
      <Text style={[styles.coluna, styles.colunaNome, styles.textoDados]} numberOfLines={1}>
        {item.nome}
      </Text>
      
      <Text style={[styles.coluna, styles.colunaData, styles.textoDados]}>
        {item.dataNasc ? new Date(item.dataNasc).toLocaleDateString('pt-BR') : "N/I"}
      </Text>
      
      <Text style={[styles.coluna, styles.colunaTelefone, styles.textoDados]}>
        {item.telefone || "N/I"}
      </Text>
      
      <View style={[styles.coluna, styles.colunaAcoes]}>
        <View style={styles.containerBotoes}>
          <TouchableOpacity 
            style={[styles.botaoAcao, styles.botaoEditar]}
            onPress={() => handleEditarPaciente(item)}
          >
            <FontAwesome name="edit" size={16} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.botaoAcao, styles.botaoExcluir]}
            onPress={() => handleExcluirPaciente(item)}
          >
            <FontAwesome name="trash" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho local1={() => navigation.goBack()} />

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 50 }}></View>

        <View style={styles.box}>
          <Text style={styles.title}>Consulta de Pacientes</Text>

          <Text style={styles.subTitle}>Digite o nome do paciente</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do paciente..."
              value={nome}
              onChangeText={setNome}
            />
            {nome.length > 0 && (
              <TouchableOpacity onPress={limparBusca} style={styles.limparBtn}>
                <Text style={styles.limparText}>X</Text>
              </TouchableOpacity>
            )}
          </View>

          {carregando && <Text style={styles.carregando}>Buscando...</Text>}

          {pacientes.length > 0 && (
            <View style={styles.tabelaContainer}>
              <Text style={styles.resultadosTitle}>
                {pacientes.length} paciente(s) encontrado(s)
              </Text>
              
              {renderCabecalhoTabela()}
              
              <FlatList
                data={pacientes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItemTabela}
                scrollEnabled={false}
              />
            </View>
          )}

          {nome.length >= 2 && pacientes.length === 0 && !carregando && (
            <Text style={styles.semResultados}>Nenhum paciente com "{nome}"</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles (mantenha os mesmos do código anterior)
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
  inputContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    padding: 15,
    width: "100%",
    fontSize: 16,
  },
  carregando: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  tabelaContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  resultadosTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#382c81ff',
    marginBottom: 15,
    textAlign: 'center',
  },
  linhaTabelaCabecalho: {
    flexDirection: 'row',
    backgroundColor: '#382c81ff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 2,
  },
  linhaTabela: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  coluna: {
    paddingHorizontal: 4,
  },
  colunaNome: {
    flex: 3,
  },
  colunaData: {
    flex: 2,
  },
  colunaTelefone: {
    flex: 2,
  },
  colunaAcoes: {
    flex: 1.5,
  },
  textoCabecalho: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  textoDados: {
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botaoAcao: {
    padding: 6,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 28,
  },
  botaoEditar: {
    backgroundColor: '#ffa500',
  },
  botaoExcluir: {
    backgroundColor: '#ff4444',
  },
  semResultados: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
    marginTop: 10,
  },
});