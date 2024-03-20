import styled from '@emotion/styled'

export const Rodape = styled.footer`
    width: 100vw;
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl};
    color: ${props => props.theme.cores.branco};
    position: fixed;
    bottom: 0;
`
