
//Como eu achei desnecessario dois temas nesse app, apenas reduzi para um

export default {
  colors: {
    primary: '#D62828',
    primary_smooth: '#e85454',
    secondary: '#001B29',
    font_color: '#000',
    font_color_white: '#fff',
    backgroud: '#F8F9FA',
    blue_select_items: '#00b4d8',
    gray: '#adb5bd'
  },
  fonts: {
    default: 'Inter_400Regular',
    bold: 'Inter_700Bold'
  },
  sizes: {
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 26
  }
};

/*
  Interface aqui tem um sentido diferente da POO tradicional.
  Uma interface é uma forma de declarar a estrutura de um objeto. 
  Ela descreve as propriedades e métodos que um objeto deve ter, 
  mas sem implementar os métodos ou armazenar valores.
*/
// export interface Theme {
//   colors: {
//     primary: string,
//     secondary: string,
//     font_color: string,
//     backgroud: string
//   },
//   fonts: {
//     default: string,
//     bold: string
//   },
//   sizes: {
//     small: number,
//     medium: number,
//     large: number,
//     xlarge: number
//   }
// }

// const darkTheme: Theme = {
//   /*
//     O spread operador (...) no JS/TS é utilizado para expandir 
//     elementos de iteráveis (como arrays ou strings) ou propriedades de objetos em diferentes contextos. 
//   */
//   ...lightTheme,
//   colors: {
//     ...lightTheme.colors,
//     font_color: '#FAF9EF',
//     backgroud: '#212121',
//   },
// };