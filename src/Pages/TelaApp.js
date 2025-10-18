import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TelaApp() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.boxContainer}
      enabled={true}
      behavior={"padding"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.boxContainer}>
          <View style={styles.boxLogin}>
            <View style={styles.BoxImgLogo}>
              <Image
                source={require("../Assets/img/Logo.png")}
                style={styles.ImgLogo}
              />
            </View>

            <Text style={styles.boxTitulo}>Clinicode</Text>

            <View>
              <TouchableOpacity
                style={styles.boxOptionLogin}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.TextOptionLogin}>Fazer login</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.boxOptionRegistro}
                onPress={() => navigation.navigate("Cadastro")}
              >
                <Text style={styles.TextOptionRegistro}>Cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = {
  boxContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  boxLogin: {
    padding: 10,
    flexDirection: "column",
    backgroundColor: "#fff",
    width: 330,
    paddingVertical: 60,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 50,
    elevation: 5,
  },
  boxTitulo: {
    marginBottom: 30,
    marginTop: 10,
    fontFamily: "Orbitron-Bold",
    fontSize: 23,
    color: "#382c81ff", 
  },
  boxOptionLogin: {
    flexDirection: "column",
    backgroundColor: "#382c81ff", 
    borderRadius: 19,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#382c81ff", 
    color: "#ffffff",
    paddingHorizontal: 15,
    fontFamily: "Poppins",
    justifyContent: "center",
    alignItems: "center",
  },
  boxOptionRegistro: {
    flexDirection: "column",
    backgroundColor: "#382c81ff",
    borderRadius: 19,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#382c81ff",
    color: "#ffffff",
    paddingHorizontal: 15,
    fontFamily: "Poppins",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  TextOptionLogin: {
    color: "#ffffff",
    fontFamily: "Poppins",
  },
  TextOptionRegistro: {
    color: "#ffffff",
    fontFamily: "Poppins",
  },
  ImgLogo: {
    width: 180,
    height: 100,
    marginLeft: 5,
    marginTop: -40,
  },
  BoxImgLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
};
