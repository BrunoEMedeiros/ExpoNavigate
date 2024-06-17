import { Pressable, Text } from "react-native"
import { Container, TextoHorarios } from "./style"
import { Horario } from "@/app/(horarios)/horarios"
import { formatDatetoTime } from "@/utils/utils"
import { useState } from "react"

type Props = {
    //Aqui eu uso a interface que eu declarei em /app/(horarios)/horarios
    id: Number,
    horario: Horario,
    funcao: Function
}

export default function Time({id, horario, funcao}: Props){

    const [select, setSelect] = useState(false)
    return(
        <Pressable onPress={()=> {
            setSelect(!select)
            funcao(id)
        }}>
            <Container selected={select}>
                <TextoHorarios selected={select}>{formatDatetoTime(horario.horario_inicio)}</TextoHorarios>
                <TextoHorarios selected={select}> até </TextoHorarios>
                <TextoHorarios selected={select}>{formatDatetoTime(horario.horario_final)}</TextoHorarios>
            </Container>
        </Pressable>
    )
}