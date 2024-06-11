import { 
    View, 
    StyleSheet, 
    Alert,
    ActivityIndicator,
    StatusBar} from "react-native";

import { 
    Link,
    router
    } from 'expo-router'

import { Icon } from 'react-native-elements'
import { useEffect, useState } from "react";
import { apiConfig } from "@/utils/api";
import { 
    Botao, 
    Formulario, 
    ImagemLogo, 
    InputReactElements, 
    Tela, 
    Texto } from "./style";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";

//Todas as fontes que vão ser usadas na pagina devem ser importadas
//como eu estou usando o theme e la estão cadastradas essas duas,
//são elas que eu importo para a pagina
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function LoginPage()
{
    //State usado exclusivamente para controlar o icone e o efeito de secureTextEntry true/false no campo senha
    const [passwordVisible, SetPasswordVisible] = useState(true)

    //States feitos para controlar oque o usuario esta digitando nos Inputs
    //Por questão da validação inicial apenas, foi colocado valores iniciais quaisquer nos states 
    const [email, setEmail] = useState('@')
    const [password, setPassword] = useState('_password_')

    //Campos feitos para controlar se os campos tem de erro
    const [isEmailError, setIsEmailError] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)

    //Usando fonts externas, nesse caso do respositório do google fonts associado ao expo
    const[fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold})

    useEffect(() => {
        if(!email.trim().includes('@') || email == null)
            setIsEmailError(true)
        else
            setIsEmailError(false)
        if(password.length != 10 || password == null)
            setIsPasswordError(true)
        else
            setIsPasswordError(false)
    }, [email, password]);

    //Função usada pra enviar o post para a rota da api responsavel pelo login
    async function login()
    {
        if(!isPasswordError && !isEmailError && email != '@' && password != '_password_')
        {
            try
            {
                //Ja que a API é padrão para todo o sistema, isolei as configurações gerais
                //e apenas importo elas aonde preciso e uso o método http que eu quero

                let res = await apiConfig.post('/login',{
                    email: email,
                    senha: password
                });

                if(res.status == 204){
                    return Alert.alert('Ops...','Usuario ou senha incorretos!',
                        [
                            {
                                text: 'Ok'
                            }
                        ]
                    )
                }
                else
                    router.replace('/(tabs)/home');
            }
            catch(error)
            {
                console.log(error)
                throw new Error('Erro ao logar... :(');        
            }
        }
    }

    return(
        <ThemeProvider theme={theme}>
        {/* 
            Cuidado ao usar fonts ou imagens externas carregadas da net
            geralmente elas demoram alguns segundos para carregar.
            Para garantir que a tela só seja mostrada quando as fontes estiverem
            plenamente carregadas usados esse if com o fontsLoaded
        */}
        { 
            fontsLoaded ? 
            <Tela>
                {/* 
                    Exemplo simples de como estilizar a barra de status do celular
                    por motivos obvios não funciona na web
                */}
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={"transparent"}
                    translucent
                />
                <Formulario>
                    <ImagemLogo
                        source={require('../assets/images/sesi.jpg')}
                    />
                    <InputReactElements 
                        placeholder="Digite o email..."
                        label="Email"
                        onChangeText={text => setEmail(text)}
                        errorMessage={isEmailError ? 'Email invalido!' : ''}
                        inputContainerStyle={
                            !isEmailError?
                            estilo.input_container
                            :
                            estilo.input_container_error
                        }
                    />
                    <InputReactElements 
                        placeholder="Digite a senha..."
                        label="Senha"
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={passwordVisible}
                        errorMessage={isPasswordError ? 'Senha invalida!' : ''}
                        maxLength={10}
                        inputContainerStyle={
                            !isPasswordError
                            ?
                            estilo.input_container
                            :
                            estilo.input_container_error
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
                    <View style={estilo.view_botoes}>
                        <Link href='(user)/cadastro' asChild>
                            <Botao>
                                <Texto>Cadastrar-se</Texto>
                            </Botao>
                        </Link>
                        {/* 
                            Aqui eu uso um truque interessante, o styled component 
                            esta preparado para receber o theme que vem do ThemeProvider,
                            como o proprio Botao tambem recebe uma propriedade que eu uso
                            para controlar a cor de fundo dele.
                            Essas propriedades devem ser inserirdas diretamente 
                            no styled component e serem usadas por lá
                        */}
                        <Botao 
                            actionButton 
                            onPress={()=> login()}>
                            <Texto>Entrar</Texto>
                        </Botao>              
                    </View>
                </Formulario>      
            </Tela>
             :
             <ActivityIndicator /> 
            }
        </ThemeProvider>
    )
}
/*  
    Existem estilos ou configurações particulares que não necessitam
    serem generalizadas em styled components especificos
    entao para estas eu mantenho a estilização em linha tradicional
*/
const estilo = StyleSheet.create({

    //Efeito de troca do estilo interno do input 
    //ao encontrar ou nao erro na validação

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

    //Uma view simples qualquer apenas para alinhas os botoes com a tela
    view_botoes: {
        width: '100%',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
})