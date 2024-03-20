import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#B009FF',
        primarias: {
            a: '#AF38F8',
            b: '#38BDF8',
            c: ''
        },
        secundarias: {
            a: '#F8F8FD',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: '#386EF8'
        }
    },
    espacamentos: {
       xs: '8px',
       s : '16px',
       l : '32px',
       xl: '48px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}