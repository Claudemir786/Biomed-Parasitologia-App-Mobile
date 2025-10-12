import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Cabecalho({ nome="Claudemir dos Santos Junior", rgm="123456789", local1, local2, local3}){

    return(
        <View style={styles.container}>
            <View style={styles.containerBotao}>
                {/* <TouchableOpacity style={styles.botao}><Text style={{color:'#fff', fontSize:15, fontFamily:'Rajdhani-Bold'}}>Sair</Text></TouchableOpacity> */}
            </View>
            {/* <View style={styles.Ctitle}>
                <TouchableOpacity onPress={local1}>
                    
                    <Text style={styles.title}>CLINICODE</Text>

                </TouchableOpacity> 
            </View> */}
            <View style={styles.infoUser}>
                <TouchableOpacity style={styles.botaoUser}>
                    <Text style={styles.iconUser}><FontAwesome name="user" size={30} color="#fff" /></Text>
                    <Text style={styles.textUser}>{nome} | {rgm}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{       
       backgroundColor:'#272343',
       width:'100%', 
       //position:'static',
    },
    containerBotao:{
        alignItems:'flex-end',
        marginRight:20,
        marginTop:20,        
    },
    botao:{
        backgroundColor:"#807872ff",
        borderRadius:20,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        width:80
    },
    // Ctitle:{
    //     alignItems:'center',
    //     justifyContent:'center', 
    //     marginTop:10,       

    // },
    title:{
        color:'#fff',
        fontSize:45,
        fontFamily:'OpenSans-Bold'
    },
    infoUser:{
        backgroundColor:'#afacaaff',
        marginTop:30,
        height:55,
        
                      
    },
    botaoUser:{
        flexDirection:'row',
        backgroundColor:'#807c72ff',
        alignItems:'center',      
        height:40,
        marginTop:8,
        borderRadius:20,
        marginLeft:5,
        marginRight:5,
        
        
    },
    textUser:{
        color:"#fff",
        paddingTop: 7,
        marginLeft:10,
        fontFamily: 'Poppins-Regular'
                  
    },
    iconUser:{
        paddingLeft: 15
    },
})