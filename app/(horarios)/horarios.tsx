import Time from "@/components/Horario";
import theme from "@/theme";
import { apiConfig } from "@/utils/api";
import { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { Botao, InputArea, Texto } from "./style";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export interface Horario{
    id: number,
    horario_inicio: string,
    horario_final: string,
    ativo: number
}

export default function Horarios()
{
    const {id, name, id_user} = useLocalSearchParams()

    const [horarios, setHorarios] = useState<Horario[]>([])
    const [horariosSelecionados, setHorarioSelecionado] = useState<number[]>([])
    const [descricao, setDescricao] = useState('@')

    const[isDescError, setIsDescError] = useState(false)

    useEffect(() => {
        apiConfig
        .get('/horarios')
        .then((res)=> {
            setHorarios(res.data)           
        })
    }, []);

    useEffect(() =>{
        if(descricao.length < 1 || descricao == null)
            return setIsDescError(true)
        else
           return setIsDescError(false)

    },[horariosSelecionados, descricao])

    function handleAgendamento(id_horario: number)
    {
        if(!horariosSelecionados.includes(id_horario))
        {
            return setHorarioSelecionado(prevState => [...prevState,id_horario])        
        }
        else{
            return setHorarioSelecionado(prevState => 
                prevState.filter(horario => horario != id_horario))
        }
    }

    //Função usada para criar o agendamento
    async function createScheduling(){
        try {
        if(descricao != '@' && horariosSelecionados.length > 1)
        {
            const res = await apiConfig.post('/agendamento/novo',{
                desc: descricao,
                id_usuario: id_user,
                id_sala: id
            })
            
            await apiConfig.post('/agendamento/horarios',{
                id_horarios: horariosSelecionados,
                id_agendamento: res.data
            })
        }
        setHorarioSelecionado([])
        router.back()
        } catch (error) {
            console.log(error)
            throw(error)
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <View style={{flex: 1, padding: 20}}>
            {/* <Text style={{fontSize: 30}}>{name}</Text> */}
            <InputArea 
                        multiline
                        numberOfLines={4}
                        maxLength={100}
                        placeholder="Diga para que vai usar a sala..."
                        label="Descrição"
                        onChangeText={text => setDescricao(text)}
                        errorMessage={isDescError ? 'Descrição invalida!' : ''}
                        inputContainerStyle={
                            !isDescError?
                            estilo.input_container
                            :
                            estilo.input_container_error
                        }
            />
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={horarios}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <Time id={item.id} 
                            horario={item} 
                            funcao={handleAgendamento}
                        />
                    }}
                    ItemSeparatorComponent={()=> (
                        <View style={{height: 10}}></View>
                    )}            
                />

                <View style={{flexDirection: 'row', gap: 10, marginTop: 20}}>
                <Botao>
                    <Texto ligth onPress={()=> createScheduling()}>Agendar</Texto>
                </Botao>
                <Botao actionButton>
                    <Texto>Limpar</Texto>
                </Botao>
                </View>
            </SafeAreaView>
            </View>     
        </ThemeProvider>
    )
}

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
})
