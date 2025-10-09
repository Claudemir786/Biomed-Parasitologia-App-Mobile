import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from "../Pages/TelaPrincipal";
import Analytics from "../Pages/Analytics";
import Configuracoes from "../Pages/Configuracoes";
import {Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function TabNavigator(){

    return(
        <Tab.Navigator 
        screenOptions={
            {headerShown: false,
             tabBarStyle:{
                backgroundColor:'#272343',               

             }
            }        
        }
        initialRouteName="Inicio"
        
        >

            <Tab.Screen 
            name="Inicio" component={Inicio}
            options={{
                tabBarIcon: ({color,size,focused})=>{
                    if(focused){
                        return <Ionicons name="home" size={23} color={color} />
                    }
                    return <Ionicons name="home-outline" size={23} color={color} />
                }
            }}
            
            />
            <Tab.Screen name="Analytics" component={Analytics}
            
             options={{
                tabBarIcon: ({color,size,focused})=>{
                    if(focused){
                        return <Ionicons name="analytics" size={23} color={color} />
                    }
                    return <Ionicons name="analytics-outline" size={23} color={color} />
                }
            }}
            />
            <Tab.Screen name="Configuracões" component={Configuracoes}
            
             options={{
                tabBarIcon: ({color,size,focused})=>{
                    if(focused){
                        return <Ionicons name="settings" size={23} color={color} />
                    }
                    return <Ionicons name="settings-outline" size={23} color={color} />
                }
            }}
            />

        </Tab.Navigator>
    )
}