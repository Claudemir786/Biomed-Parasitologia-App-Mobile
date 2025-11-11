import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroExame from '../Pages/CadastroExame';
import Inicio from '../Pages/TelaPrincipal';
import Laudo from '../Pages/Laudo';
import TabNavigator from './tabs';
import TelaApp from '../Pages/TelaApp';
import TelaLogin from '../Pages/TelaLogin';
import CadastroPaciente from "../Pages/CadastroPaciente";
import ConsultaPacientes from "../Pages/ConsultaPacientes";
import TelaCadastro from '../Pages/TelaCadastro';
import Analytics from '../Pages/Analytics';
import Configuracoes from '../Pages/Configuracoes';

export default function Abas() {
  const Stack = createNativeStackNavigator();
  
  return (   
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ headerShown: false }}            
    > 
      <Stack.Screen name='App' component={TelaApp}/>
      <Stack.Screen name='Login' component={TelaLogin}/>
      <Stack.Screen name='Cadastro' component={TelaCadastro}/>
      <Stack.Screen name='TabNavigator' component={TabNavigator}/>
      <Stack.Screen name='Inicio' component={Inicio}/>
      <Stack.Screen name='CadastroExame' component={CadastroExame}/>
      <Stack.Screen name='Laudo' component={Laudo}/>
      <Stack.Screen name='CadastroPaciente' component={CadastroPaciente} /> 
      <Stack.Screen name="ConsultaPacientes" component={ConsultaPacientes} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="Configuracoes" component={Configuracoes} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});