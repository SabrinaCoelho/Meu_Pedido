import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../Pages/LayoutBase";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase/>,
        children: [
            {
                path: "cadastro",
                element: <h1 className="text-9xl">LayoutBaseCadastro</h1>,
                children: [
                    {
                        path: "",
                        element: <h1 className="text-9xl">SelecaoTipoUsuario</h1>,
                    },
                    {
                        path: "dados_cadastro",
                        element: <h1 className="text-9xl">R</h1>,
                    }
                ]
            }
        ]
    }
])