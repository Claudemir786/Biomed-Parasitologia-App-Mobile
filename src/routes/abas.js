
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroExame from '../Pages/CadastroExame';
import Inicio from '../Pages/TelaPrincipal';
import Laudo from '../Pages/Laudo';



export default function Abas() {

    const Stack = createNativeStackNavigator(); //coloca todas as utilidades na const Stack
  return (  
   

        <NavigationContainer>

            <Stack.Navigator //escolhe o tipo de navegação entre as telas
                initialRouteName="Inicio"
                screenOptions={{headerShown: false}} //remove a flecha de voltar            
            > 
                
                {/*identifica todas as telas na rota e da seus respectivos nomes */}
                <Stack.Screen name='Inicio' component={Inicio}/>
                <Stack.Screen name='CadastroExame' component={CadastroExame}/>
                <Stack.Screen name='Laudo' component={Laudo}/>

            </Stack.Navigator>

        </NavigationContainer>
    
    
  );
}


