import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TelaLogin({ navigation }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
    <View style={styles.arrowContainer}> 
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#6d6e6fff" />
      </TouchableOpacity>
    </View>

        <Text style={styles.title}>Login</Text>

        {/* Campo de Login */}
        <TextInput
          style={styles.input}
          placeholder="RGM"
          placeholderTextColor="#aaa"
          value={login}
          onChangeText={setLogin}
        />

        {/* Campo de Senha */}
        <View style={styles.senhaContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!senhaVisivel}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity
            onPress={() => setSenhaVisivel(!senhaVisivel)}
            style={styles.iconEye}
          >
            <FontAwesome
              name={senhaVisivel ? "eye" : "eye-slash"}
              size={22}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity
          style={styles.btnEntrar}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
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
  box: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
  },
  title: {
    fontFamily: "Orbitron-Bold",
    fontSize: 28,
    fontWeight: "700",
    color: "#382c81ff",
    marginBottom: 25,
    marginTop: -25
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  senhaContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  inputSenha: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  iconEye: {
    paddingHorizontal: 12,
  },
  btnEntrar: {
    backgroundColor: "#382c81ff",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  arrowContainer: {
    alignSelf: 'flex-start', // Alinha à esquerda
    marginBottom: 10, // Espaço entre a seta e o título
  },
});
