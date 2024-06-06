import { apiConfig } from "@/utils/api";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Salas{
    id: number,
    nome: string,
    ativo: number
}

export default function Home()
{
    const [salas, setSalas] = useState<Salas[]>([])

    //Toda vez que voce quiser que algo aconteça assim que,
    //o component é carregado na tela, use useEffect()
    useEffect(() => {
        apiConfig.get('/salas')
        .then((res)=>{
            setSalas([...res.data])
        })
    }, [salas]);

    return(
        <SafeAreaView>
            <View>
               <FlatList 
                    data={salas}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    renderItem={({item}) =>{
                        return <Text>{item.nome}</Text>
                    }}
               />
            </View>
        </SafeAreaView>
    )
}