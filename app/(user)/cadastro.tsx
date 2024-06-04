import { Input, Icon } from 'react-native-elements'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { apiConfig } from '@/utils/api'
import { router, useRouter } from 'expo-router'

export default function CadastroUsuario()
{
    const router = useRouter();

    const [passwordVisible, SetPasswordVisible] = useState(true)

    const [nome, setNome] = useState('some_name')
    const [email, setEmail] = useState('@')
    const [password, setPassword] = useState('_password_')
    const [confirmPassword, setConfirmPassword] = useState('_password_')

    const [errorNome, setErrorNome] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    
    useEffect(() => {
        if(!email.trim().includes('@') || email == "" || email == null)
            setErrorEmail('Insira um email valido!')
        else
            setErrorEmail('')
        
        if(password.length < 10 || password.length > 10 || password == "" || password == null)
            setErrorPassword('Senha invalida!')
        else
            setErrorPassword('')

        if(nome == "" || nome == null)
            setErrorNome('Nome invalido')
        else
            setErrorNome('')

        if(confirmPassword != password)
        {
            setErrorConfirmPassword('As senhas não coincidem')
        }
        else
            setErrorConfirmPassword('')
        
    }, [nome, email, password, confirmPassword]);

    async function storeUser(){
        if(errorNome == '' && 
        errorEmail == '' && 
        errorPassword == '' &&
        errorConfirmPassword == '')
        {
            try{
                let resposta = await apiConfig.post('/user/novo',{
                    nome: nome,
                    email: email,
                    senha: password,
                })

                if(resposta.status == 200)
                {
                    return Alert.alert('Ok','Usuario cadastrado!',
                    [
                        {
                            text: 'Ok',
                            onPress: ()=> router.dismiss(1)
                        }
                    ])
                }
                else
                {
                    return Alert.alert('Ops...','Email ja cadastrado!',
                    [
                        {
                            text: 'Ok',
                        }
                    ])  
                }
            }
            catch(error){

            }
        }
    }

    return (
        <View style={estilo.tela}>
            <View style={estilo.formulario}>
                <Input
                    style={estilo.text_input} 
                    label="Nome"
                    placeholder='Digite seu nome...'
                    onChangeText={text => setNome(text)}
                    inputContainerStyle={
                        errorNome == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    errorMessage={errorNome}
                    leftIcon={
                        <Icon 
                            name='person'
                            type='material'
                        />
                    }
                />
                <Input 
                    style={estilo.text_input} 
                    label="Email"
                    placeholder='Digite seu email...'
                    errorMessage={errorEmail}
                    onChangeText={text => setEmail(text)}
                    inputContainerStyle={
                        errorEmail == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    leftIcon={
                        <Icon 
                            name='mail'
                            type='material'
                        />
                    }
                />
                <Input
                    style={estilo.text_input} 
                    label="Senha"
                    placeholder='Deve ter 10 caracteres...'
                    maxLength={10}
                    onChangeText={text => setPassword(text)}
                    inputContainerStyle={
                        errorPassword == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    secureTextEntry={passwordVisible}
                    errorMessage={errorPassword}
                    leftIcon={
                        <Icon 
                            name='password'
                            type='material'
                        />
                    }
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
                <Input 
                    style={estilo.text_input}
                    label="Confirme a senha"
                    placeholder='Repita a senha...'
                    errorMessage={errorConfirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    inputContainerStyle={
                        errorConfirmPassword == '' ?
                        estilo.input_container
                        :
                        estilo.input_container_error
                    }
                    maxLength={10}
                    secureTextEntry={passwordVisible}
                    leftIcon={
                        <Icon 
                            name='password'
                            type='material'
                        />
                    }
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
                <Pressable style={ estilo.botoes } onPress={()=> storeUser()}>
                    <Text style={estilo.texto_botoes}>Confirmar</Text>
                </Pressable>
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
    formulario: {
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
    text_input: {
        height: 60,
        borderRadius: 20,
        width: '100%',
        padding: 15
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
    disable : {
        opacity: 0.2
    },
    texto_botoes : {
        color: 'white',
        fontSize: 20
    }
})