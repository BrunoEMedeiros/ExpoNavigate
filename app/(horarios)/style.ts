import styled from 'styled-components/native'
import { Input } from 'react-native-elements'

interface ButtonProps {
    actionButton?: boolean;
}

interface TextProps{
    ligth?: boolean
}

export const InputArea = styled(Input)`
    height: ${({theme}) => theme.sizes.large * 5}px;
    border-radius: ${({theme}) => theme.sizes.large}px;
    width: 100%;
    font-family: ${({theme}) => theme.fonts.default};
`

export const Botao = styled.Pressable<ButtonProps>`
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: ${({theme}) => theme.sizes.small}px;
    background-color: ${(props) => props.actionButton ? props.theme.colors.gray : props.theme.colors.primary};
    border-radius: ${({theme}) => theme.sizes.large}px;
`

export const Texto = styled.Text<TextProps>`
    color: ${(props) => props.ligth ? props.theme.colors.font_color_white : props.theme.colors.font_color};
    font-size: ${({theme}) => theme.sizes.medium}px;
    font-family: ${({theme}) => theme.fonts.default};
`