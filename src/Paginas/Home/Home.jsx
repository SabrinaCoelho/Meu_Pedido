import { Link } from "react-router-dom"
import { Botao } from "../../Components/Botao/Botao"
import { Tipografia } from "../../Components/Tipografia/Tipografia"


export const Home = () => {
    return(
        <>
            <Tipografia variante="h1" componente="h1">
                Com Meu Pedido você otimiza o atendimento ao seu cliente
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Através da comanda digital ambos ficam por dentro de todos os pedidos feitosem tempo real, além de diminuir o tempo de espera por um atendente.
            </Tipografia> 
            <Link to='/'>
                <Botao variante="secundaria">Saiba mais</Botao>
            </Link>
            <Link to='/login'>
                <Botao  >Login</Botao>
            </Link>
        </>
    )
}