import { Col, Row } from "react-grid-system"
import { CampoTexto } from "../../Components/CampoTexto/CampoTexto"
import { useLoginContext } from "../../Contexto/Login"
import { Botao } from "../../Components/Botao/Botao"
import { useComandaContext } from "../../Contexto/Comanda"
import { Tipografia } from "../../Components/Tipografia/Tipografia"


export const ComandaDigital = () => {

    const {
        comanda,
        atendente,
        erros,
        cliente,
        mesa,
        comandaID,
        inicio,
        termino,
    } = useComandaContext()

    const entrar = (event) => {
        event.preventDefault();
        console.log(comanda)
    }
    
    return (
        <div>
            <form onSubmit={entrar}>
                <Row>
                    <Col>
                        <Tipografia variante="body" componente="body">
                            {comanda.cliente}
                        </Tipografia>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tipografia variante="body" componente="body">
                            {comanda.mesa}
                        </Tipografia>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tipografia variante="body" componente="body">
                            {comanda.atendente}
                        </Tipografia>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tipografia variante="body" componente="body">
                            {comanda.comandaID}
                        </Tipografia>
                    </Col>
                </Row>
                <Botao variante="primaria" >
                    Iniciar atendimento
                </Botao>
            </form>
        </div>
        
    )
}