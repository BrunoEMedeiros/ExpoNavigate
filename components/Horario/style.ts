import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    padding: ${({theme}) => theme.sizes.large}px;
    background-color: ${({theme}) => theme.colors.primary_smooth};
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
`

export const TextoHorarios = styled.Text`
    color: ${({theme}) => theme.colors.font_color_white};
    font-family: ${({theme}) => theme.fonts.default};
    font-size: ${({theme}) => theme.sizes.large}px;
`