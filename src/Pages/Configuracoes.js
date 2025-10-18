import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Cabecalho from '../Components/Cabecalho/Cabecalho';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Configuracoes({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Cabecalho />
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          <View style={styles.containerImgUser}>
            <Image
              source={require('../Assets/img/imgUser.jpeg')}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          </View>

          <View style={styles.containerMenu}>
            <TouchableOpacity style={styles.option}>
              <FontAwesome name="lock" size={24} color="#fff" style={styles.icon} />
              <Text style={styles.text}>Alterar Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <FontAwesome name="envelope" size={24} color="#fff" style={styles.icon} />
              <Text style={styles.text}>Alterar E-mail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("App")} >
              <FontAwesome name="sign-out" size={24} color="#fff" style={styles.icon} />
              <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
          </View>
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
  containerImgUser: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMenu: {
    marginTop: 30,
    display: 'flex',
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#d1d2d3ff',
    paddingVertical: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#272343',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
