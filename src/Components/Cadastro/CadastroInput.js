import {Text, View, StyleSheet, TextInput} from 'react-native'

//função das inputs que recebem o titulo e o placeholder caso queria edita-lo
export default function CadastroInput({titulo = "default", placeholder = "Digite aqui", tipoTeclado, campo}){

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>{titulo}</Text>
            <TextInput
                style={styles.input}
                onChangeText={campo}
                placeholder={placeholder}
                keyboardType={tipoTeclado} //usada para mudar o tipo de teclado caso queira 
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:30,
        },
    input:{
        marginTop: 10,
        width:'100%',       
        padding:15,
        borderRadius:20,
        borderColor: '#ddd',
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1  
    },
    titulo:{
        fontSize:20,

    }

})