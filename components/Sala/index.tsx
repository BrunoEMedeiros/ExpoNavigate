import { StyleSheet, Text, View, Image } from "react-native";
import { Container, ImagemCard, LabelSala } from "./style";

/*
    No react native com TS, quando criamos um component que recebe props ao ser chamado na tela
    apartir de 2024 somos obrigados a tipar e estruturar essas propriedades.
    O que de forma geral é uma boa pratica.
    Podemos definir isso como interface ou como types, para casos basicos, ambos terão o mesmo efeito.
    Nesse caso vou usar o type
*/
type Props = {
    imagem?: string,
    nome: string
}

//Caso o link da imagem não seja fornecido, o component vai carregar essa imagem qualquer no lugar
export default function Room({ imagem = 'https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/feaafo.jpg', 
    nome}: Props){
    return(
        <Container>
                <ImagemCard source={{uri: imagem}} />
                <LabelSala>{nome}</LabelSala>
        </Container>
    )
}