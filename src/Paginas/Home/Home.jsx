import { Link } from "react-router-dom"
import { Botao } from "../../Components/Botao/Botao"
import { Tipografia } from "../../Components/Tipografia/Tipografia"
import { Row } from "react-grid-system"

export const Home = () => {
    return(
        <div >
            <div style={{margin: '20px 0'}}>
                <Tipografia variante="h1" componente="h1">
                    Com Meu Pedido você otimiza o atendimento ao seu cliente
                </Tipografia>
            </div>
            <div style={{margin: '10px 0'}}>
                <Tipografia variante="h3" componente="h2">
                    Através da comanda digital ambos ficam por dentro de todos os pedidos feitosem tempo real, além de diminuir o tempo de espera por um atendente.
                </Tipografia> 
            </div>
            <Row justify="center">
                <div style={{margin: '0 10px'}}>
                    <Link to='/'>
                        <Botao variante="secundaria">Saiba mais</Botao>
                    </Link>
                </div>
                <div style={{margin: '0 10px'}}>
                    <Link to='/login'>
                        <Botao  >Login</Botao>
                    </Link>
                </div>
            </Row>
        </div>
    )
}