
import styled from 'styled-components/native'

export const Container = styled.View`
    
    width: 180px;
    height: 200px;
    padding: ${({theme}) => theme.sizes.small}px;
    background-color: ${({theme}) => theme.colors.primary_smooth};
    border-radius: 20px;
    gap: 10px;
`
export const ImagemCard = styled.Image`
    width: 100%;
    height: 130px;
    border-radius: 20px;
`

export const LabelSala = styled.Text`
    width: 100%;
    font-family: ${({theme}) => theme.fonts.default};
    font-size: ${({theme}) => theme.sizes.large}px;
    text-align: center;
    color: ${({theme}) => theme.colors.font_color_white};
`