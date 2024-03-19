import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = {
    login: '',
    senha: ''
}

export const LoginContext = createContext({
    login: usuarioInicial,
    erros: {},
    setLogin: () => null,
    setSenha: () => null,
})

export const useLoginContext = () => {
    return useContext(LoginContext);
}

export const LoginProvider = ({ children }) => {

    const navegar = useNavigate()

    //const [login, setLogin] = useState(Login) ?

    const setTipo = (tipo) => {
        console.log("@")
        console.log(tipo)
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                tipo
            }
        })
    }
    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }
    

    const submeterUsuario = () => {
        
        console.log(usuario)
        //navegar('/cadastro/concluido')
    }

    /* const possoSelecionarInteresse = () => {
        return !!usuario.Tipo
    } */

    const contexto = {
        usuario,
        setTipo,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        //possoSelecionarInteresse
    }

    return (
    <LoginContext.Provider value={contexto}>
        {children}
    </LoginContext.Provider>)
}