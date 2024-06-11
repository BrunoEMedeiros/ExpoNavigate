import { apiConfig } from "@/utils/api";
import { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";

interface Horario{
    id: number,
    horario_inicio: string,
    horario_final: string,
    ativo: number
}

export default function Horarios()
{
    // const {name} = useLocalSearchParams()
    const [horarios, setHorarios] = useState<Horario[]>([])

    useEffect(() => {
       apiConfig
       .get('/horarios')
       .then((res)=> {
            setHorarios([...res.data])
       })
    }, [horarios]);

    return(
        <View>
            {/* <Text style={{fontSize: 30}}>{name}</Text> */}
            <FlatList 
                data={horarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                    return <Text>{item.horario_final}</Text>
                }}
            />
        </View>
    )
}
