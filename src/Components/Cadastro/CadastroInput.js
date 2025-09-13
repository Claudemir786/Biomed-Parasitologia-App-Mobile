import {Text, View, StyleSheet, TextInput} from 'react-native'

//função das inputs que recebem o titulo e o placeholder caso queria edita-lo
export default function CadastroInput({titulo = "default", placeholder = "digite aqui"}){

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>{titulo}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        backgroundColor:'#E3E6E0',
        marginBottom:30,
    },
    input:{
        width:'90%',       
        padding:15,
        borderRadius:8,
        borderBottomWidth:1,
        borderColor:'purple'
    },
    titulo:{
        fontSize:20,

    }

})