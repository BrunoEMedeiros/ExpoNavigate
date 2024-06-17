import { TouchableWithoutFeedback } from "react-native";
import { Container, ImagemCard, LabelSala } from "./style";
import { Link, useRouter } from "expo-router";

/*
    No react native com TS, quando criamos um component que recebe props ao ser chamado na tela
    apartir de 2024 somos obrigados a tipar e estruturar essas propriedades.
    O que de forma geral é uma boa pratica.
    Podemos definir isso como interface ou como types, para casos basicos, ambos terão o mesmo efeito.
    Nesse caso vou usar o type
*/
type Props = {
    id: number,
    imagem?: string,
    nome: string,
    id_usuario?: number
}

//Caso o link da imagem não seja fornecido, o component vai carregar essa imagem qualquer no lugar
export default function Room({id, imagem = 'https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/feaafo.jpg', 
    nome, id_usuario}: Props){

    return(
        //Passando o nome e o id da sala como parametro pra tela de horario quando ela abrir
        <Link href={{
                pathname: "/(horarios)/horarios",
                params: {id: id, name: nome, id_user: id_usuario }
            }}>
            <Container>
                <ImagemCard source={{uri: imagem}} />
                <LabelSala>{nome}</LabelSala>
            </Container>
        </Link>
        // </TouchableWithoutFeedback>
    )
}