import { Input } from 'react-native-elements'
import styled from 'styled-components/native'

// Sempre tente priorizar as unidades declaradas no theme.
// quando for redimencionar a tela para outros modelos, apenas troque o theme
// ou faça operações matematicas com essas unidades.

// Diferente de outras interfaces, a propriedade actionButton
// o sinal de ? indica que é uma propriedade opcional
// ou seja ela pode ou nao ser passada por quem consumir o component
interface ButtonProps {
    actionButton?: boolean;
}

export const Tela = styled.View`
    flex: 1;
    align-content: center;
    justify-content: center;
    padding: ${(props) => props.theme.sizes.medium * 2}px;
    background-color: ${(props) => props.theme.colors.backgroud};
`

export const Formulario = styled.View`
    gap: 6px;
    padding: ${(props) => props.theme.sizes.small}px;
    width: 100%;
    border-radius: ${(props) => props.theme.sizes.large}px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.backgroud};
    border: 1px solid black;
`
export const ImagemLogo = styled.Image`
    width: 100%;
    height: ${(props) => props.theme.sizes.large * 5}px;
    border-radius: 10px;
    margin-bottom: ${(props) => props.theme.sizes.large}px;
    object-fit: cover;
`
//Essa é a forma como estilizar um componente vindo de uma biblioteca de terceiros
export const InputReactElements = styled(Input)`
    height: ${(props) => props.theme.sizes.large}px;
    border-radius: ${(props) => props.theme.sizes.large}px;
    width: 100%;
`
// Pressable<ButtonProps> siginifica que esse botao é do tipo
// ButtonProps que eu declarei ali em cima
// criei dessa forma para poder usar a propriedade actionButton para
// controlar a cor de fundo do botao

export const Botao = styled.Pressable<ButtonProps>`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.sizes.small}px;
    background-color: ${(props) => props.actionButton ? props.theme.colors.primary : props.theme.colors.backgroud};
    border-radius: ${(props) => props.theme.sizes.large}px;
`

export const Texto = styled.Text`
    color: ${(props) => props.theme.colors.font_color};
    font-size: ${(props) => props.theme.sizes.medium}px;
`