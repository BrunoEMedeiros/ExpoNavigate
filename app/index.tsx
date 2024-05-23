import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import { Link } from 'expo-router'
import { Input, Icon } from 'react-native-elements'
import { useEffect, useState } from "react";

export default function LoginPage()
{
    //State usado exclusivamente para controlar o icone e o efeito de secureTextEntry no campo senha
    const [passwordVisible, SetPasswordVisible] = useState(true)

    //States feitos para controlar oque o usuario esta digitando nos Inputs
    //Esta sendo colocado um valor inicial apenas por uma questao estética
    //para manter o if de validação no useEffect com a mesma lógica.
    const [email, SetEmail] = useState('someemail@')
    const [password, SetPassword] = useState('1234567890')

    //Campos feitos para controlar as mensagens de erro ao usuario
    const [errorEmailField, SetErrorEmailField] = useState('')
    const [errorPassField, SetErrorPassField] = useState('')

    // function validateFormLogin(email: string, senha: string)
    // {
    //     if(!email.trim().includes('@') || email == "" || email == null)
    //         SetErrorEmailField('Insira um email valido!')
    //     else
    //         SetErrorEmailField('')
    //     if(senha.length < 10 || senha.length > 10 || senha == "" || senha == null)
    //         SetErrorPassField('Senha invalida!')
    //     else
    //         SetErrorPassField('')

    // }

    useEffect(() => {
        if(!email.trim().includes('@') || email == "" || email == null)
            SetErrorEmailField('Insira um email valido!')
        else
            SetErrorEmailField('')
        if(password.length < 10 || password.length > 10 || password == "" || password == null)
            SetErrorPassField('Senha invalida!')
        else
            SetErrorPassField('')
    }, [email, password]);

    return(
        <View style={estilo.tela}>
            <View style={estilo.form}>
                <Image
                    style={estilo.imagem}
                    source={require('../assets/images/sesi.jpg')}
                    resizeMode="stretch"
                />
                <Input 
                    style={estilo.text_input}
                    placeholder="Digite o email..."
                    label="Email"
                    errorMessage={errorEmailField}
                    inputContainerStyle={
                        errorEmailField == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    onChangeText={text => SetEmail(text)}
                />
                <Input 
                    style={estilo.text_input}
                    placeholder="Digite a senha..."
                    label="Senha"
                    secureTextEntry={passwordVisible}
                    errorMessage={errorPassField}
                    maxLength={10}
                    inputContainerStyle={
                        errorPassField == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    onChangeText={text => SetPassword(text)}
                    rightIcon={
                        passwordVisible ? 
                        <Icon 
                            name="visibility-off"
                            type="material"
                            size={22}
                            onPress={()=> SetPasswordVisible(!passwordVisible)}
                        />
                        :
                        <Icon 
                            name="visibility"
                            type="material"
                            size={22}
                            onPress={()=> SetPasswordVisible(!passwordVisible)}
                        />
                    }   
                />
                <View style={estilo.view_botoes}>
                    <Link href='(user)/cadastro' asChild>
                        <Pressable style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text>Cadastrar-se</Text>
                        </Pressable>
                    </Link>
                    <Pressable style={estilo.botoes}>
                        <Text style={estilo.texto_botoes}>Entrar</Text>
                    </Pressable>              
                </View>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    form: {
        gap: 6,
        padding: 22,
        width: '100%', 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    imagem: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        marginBottom: 20,  
    },
    text_input: {
        height: 60,
        borderRadius: 20,
        width: '100%'
    },
    input_container : {
        borderWidth: 0
    },
    input_container_error: {
        borderWidth: 2, 
        borderColor: 'red', 
        borderRadius: 16, 
        padding: 10,
        marginTop: 10
    },
    view_botoes: {
        //marginTop: 10,
        //flexDirection: 'row', 
        width: '100%',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botoes : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    texto_botoes : {
        color: 'white',
        fontSize: 20
    }
})