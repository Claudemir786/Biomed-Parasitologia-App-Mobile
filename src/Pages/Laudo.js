import {View, Text, StyleSheet,SafeAreaView, ScrollView} from 'react-native'
import Cabecalho from '../Components/Cabecalho/Cabecalho'



export default function Laudo({navigation}){

    return(
        <SafeAreaView style={styles.container}>
            <Cabecalho local1={()=> navigation.navigate("Inicio")}/>

            <ScrollView style={styles.body}>
                
                
            </ScrollView>    
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
          flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E3E6E0',
    },
    body:{
         flex: 1,
        backgroundColor:'#E3E6E0',
    }
})