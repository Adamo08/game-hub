// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
    config,
    colors:{
        gray:{
            50:  '#F9F9F9',
            100: '#EDEDED',
            200: '#D3D3D3',
            300: '#B3B3B3',
            400: '#A0A0A0',
            500: '#898989',
            600: '#636363',
            700: '#202020',
            800: '#121212',
            900: '#111111',
        }
    }
})

export default theme