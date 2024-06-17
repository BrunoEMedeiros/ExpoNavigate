import styled from 'styled-components/native'

interface ContainerProps {
    selected?: boolean;
}

interface TextoProps {
    selected?: boolean
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    padding: ${({theme}) => theme.sizes.large}px;
    background-color: ${(props) => props.selected ? props.theme.colors.backgroud : props.theme.colors.primary_smooth};
    border: 3px ${({theme}) => theme.colors.primary_smooth} solid;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
`

export const TextoHorarios = styled.Text<TextoProps>`
    color: ${(props) => props.selected ? props.theme.colors.font_color : props.theme.colors.font_color_white};
    font-family: ${({theme}) => theme.fonts.default};
    font-size: ${({theme}) => theme.sizes.large + 5}px;
`