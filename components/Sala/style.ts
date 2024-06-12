
import styled from 'styled-components/native'

export const Container = styled.View` 
    width: ${({theme}) => theme.sizes.large * 9}px;
    height: ${({theme}) => theme.sizes.large * 10}px;
    padding: ${({theme}) => theme.sizes.small}px;
    background-color: ${({theme}) => theme.colors.primary_smooth};
    border-radius: ${({theme}) => theme.sizes.large}px;
    gap: ${({theme}) => theme.sizes.small - 4}px;
`

export const ImagemCard = styled.Image`
    width: 100%;
    height: ${({theme}) => theme.sizes.large * 6}px;
    border-radius: ${({theme}) => theme.sizes.large}px;
`

export const LabelSala = styled.Text`
    width: 100%;
    font-family: ${({theme}) => theme.fonts.default};
    font-size: ${({theme}) => theme.sizes.large}px;
    text-align: center;
    color: ${({theme}) => theme.colors.font_color_white};
`