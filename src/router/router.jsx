import { createBrowserRouter } from "react-router-dom";
import LayoutBase from "../Paginas/LayoutBase";
import { Home } from "../Paginas/Home/Home"
import SelecaoTipoUsuario from "../Paginas/Cadastro/SelecaoTipoUsuario";
import LayoutBaseCadastro from "../Paginas/Cadastro/LayoutBaseCadastro";
import DadosCadastro from "../Paginas/Cadastro/DadosCadastro";
import { Login } from "../Paginas/Login/Login";
import { IniciarAtendimento } from "../Paginas/IniciarAtendimento/IniciarAtendimento";
import { ComandaDigital } from "../Paginas/ComandaDigital/ComandaDigital";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "cadastro",
                element: <LayoutBaseCadastro/>,
                children: [
                    {
                        path: "",
                        element: <SelecaoTipoUsuario/>,
                    },
                    {
                        path: "dados-cadastro",
                        element: <DadosCadastro/>,
                    }
                ]
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "iniciar-atendimento",
                element: <IniciarAtendimento/>
            },
            {
                path: "comanda-digital",
                element: <ComandaDigital/>
            }
        ]
    }
])