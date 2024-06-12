import { Text } from "react-native"
import { Container, TextoHorarios } from "./style"
import { Horario } from "@/app/(horarios)/horarios"
import { formatDatetoTime } from "@/utils/utils"

type Props = {
    //Aqui eu uso a interface que eu declarei em /app/(horarios)/horarios
    horario: Horario
}

export default function Time({horario}: Props){
    return(
        <Container>
            <TextoHorarios>{formatDatetoTime(horario.horario_inicio)}</TextoHorarios>
            <TextoHorarios> até </TextoHorarios>
            <TextoHorarios>{formatDatetoTime(horario.horario_final)}</TextoHorarios>
        </Container>
    )
}