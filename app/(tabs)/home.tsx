import Room from "@/components/Sala";
import getUser from "@/storage/users/userGet";
import theme from "@/theme";
import { apiConfig } from "@/utils/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";

//Usamos como forma de definir para o TS que esse tipo Salas esta sendo criando nesses moldes
interface Salas{
    id: number,
    nome: string,
    ativo: number
}

interface Usuario{
    id: number,
    nome: string
}

export default function Home()
{
    const [salas, setSalas] = useState<Salas[]>([])
    const [user, setUser] = useState<Usuario>()
    //Toda vez que voce quiser que algo aconteça assim que,
    //o component é carregado na tela, use useEffect()
    
    useEffect(() => {
        getUser().then((storage)=>{
            //console.log(storage)
            setUser(storage)
        });

        apiConfig.get('/salas')
        .then((res)=>{
            setSalas(res.data)
        })
    }, []);

    return(
        // Passo o theme como forma de facilitar minha vida com os estilo e tamanhos
        <ThemeProvider theme={theme}>
            {/* Lembre-se que uma flet list sempre deve ser carregada como filha de um SafeAreaView */}
            <SafeAreaView style={{flex: 1, padding: 16}}>
                {
                /* 
                    Diferente da outra mostrada em aula, 
                    essa tem mais configurações e estilizações 
                */
                }
                <FlatList 
                        data={salas}
                        keyExtractor={item => item.id.toString()}
                        columnWrapperStyle={{justifyContent: "space-between"}}
                        numColumns={2}
                        renderItem={({item}) =>{
                            return <Room 
                                id={item.id} 
                                nome={item.nome} 
                                id_usuario={user?.id}
                            />
                        }}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={<Text>Nenhuma sala cadastrada...</Text>}
                        ItemSeparatorComponent={()=> (
                            <View style={{height: 10}}></View>
                        )}
                />
            </SafeAreaView>
        </ThemeProvider>
    ) 
}