import Time from "@/components/Horario";
import theme from "@/theme";
import { apiConfig } from "@/utils/api";
import { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { ThemeProvider } from "styled-components";

export interface Horario{
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
            //console.log(formatDatetoTime(res.data.horario_final))
            setHorarios(res.data)            
       })
    }, []);

    return(
        <ThemeProvider theme={theme}>
            <View style={{padding: 20}}>
            {/* <Text style={{fontSize: 30}}>{name}</Text> */}
            <FlatList 
                data={horarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                    return <Time horario={item}/>
                }}
                ItemSeparatorComponent={()=> (
                    <View style={{height: 20}}></View>
                )}            
            />
            </View>
        </ThemeProvider>
    )
}
