import { Link } from "react-router-dom"
import { Botao } from "../../Components/Botao/Botao"


export const Home = () => {
    return(
        <>
            <h1 className="text-6xl font-extrabold">Com Meu Pedido você otimiza o atendimento ao seu cliente</h1>
            <h2 className="text-xl text-gray-800">Através da comanda digital ambos ficam por dentro de todos os pedidos feitosem tempo real, além de diminuir o tempo de espera por um atendente.</h2>
            
            <Link to='/login'>
                <Botao>Login</Botao>
            </Link>
            <Link to='/'>
                <Botao>Saiba mais</Botao>
            </Link>
        </>
    )
}