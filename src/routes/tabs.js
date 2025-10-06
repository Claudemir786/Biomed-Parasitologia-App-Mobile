import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../Pages/TelaPrincipal";
import Analytics from "../Pages/Analytics";
import Configuracoes from "../Pages/configuracoes";


const Tab = createBottomTabNavigator();

export default function TabNavigator(){

    return(
        <Tab.Navigator 
        screenOptions={{headerShown: false}}
      
        >

            <Tab.Screen nome="Inicio" component={Inicio}/>
            <Tab.Screen nome="Analytics" component={Analytics}/>
            <Tab.Screen nome="Configuracoes" component={Configuracoes} />

        </Tab.Navigator>
    )
}