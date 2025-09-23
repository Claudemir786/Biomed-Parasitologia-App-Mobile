import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'

export default function Card({imagem, titulo='default', subtitulo = 'default', local}){

    return(
        <View style={styles.container}>
            <View style={styles.CardImage}>
               <Image
                source={imagem}   
                style={styles.image}             
               />
            </View>

            <View style={styles.CTitles}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.subtitle}>{subtitulo}</Text>
            </View>
            <View style={styles.CButton}>
                <TouchableOpacity 
                style={styles.button} 
                onPress={local} //variavel local é usada para navegar para outra pagina
                >

                    <Text style={{fontSize:25, fontWeight:'bold', color:'#FFF'}}>CADASTRAR</Text>
                
                </TouchableOpacity>
            </View>
        </View>

    )


}

const styles = StyleSheet.create({
    container:{        
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#fff',
        marginTop:25,
        borderRadius:10,
        padding:30
             

    },
    CardImage:{
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    image:{
        width:350,
        height:200,
    },
    CTitles:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,


    },
    title:{
        fontSize:25,
        fontWeight:'bold',

    },
    subtitle:{
        fontSize:20,
        marginLeft:60,
        marginRight:60,
        marginTop:5,
        textAlign:'center',        
    },    
    CButton:{
        marginTop:20,
        
    },
    button:{        
        backgroundColor:'#0D6EFD',
        borderRadius:20,
        marginLeft:60,
        marginRight:60,
        alignItems:'center',       
        padding:6
    }

}) 