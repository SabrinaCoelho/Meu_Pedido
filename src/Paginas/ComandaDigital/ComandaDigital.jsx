import { Col, Row } from "react-grid-system"
import { CampoTexto } from "../../Components/CampoTexto/CampoTexto"
import { useLoginContext } from "../../Contexto/Login"
import { Botao } from "../../Components/Botao/Botao"
import { useComandaContext } from "../../Contexto/Comanda"
import { Tipografia } from "../../Components/Tipografia/Tipografia"


export const ComandaDigital = () => {

    const {
        comanda,
        setErros,
        setAtendente,
        setCliente,
        setMesa,
        setComandaID,
        setInicio,
        setTermino,
        submeterComanda
    } = useComandaContext()

    const iniciar = (event) => {
        event.preventDefault();
        console.log(comanda)
    }
    
    return (
        <div>
            <Row justify="between">
                <Tipografia variante="body" componente="body">
                    Pedido
                </Tipografia>
                <Tipografia variante="body" componente="body">
                    Comanda n° {comanda.comandaID}
                </Tipografia>
            </Row>
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
            {/* <form onSubmit={iniciar}>
                <div>
                    <Row>
                        <Col>
                            <CampoTexto 
                                titulo="Cliente" 
                                valor={login.email}
                                onChange={setEmail}
                                tipo="text"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <CampoTexto 
                                titulo="Senha" 
                                valor={login.senha}
                                onChange={setSenha}
                                tipo="password"
                            />
                        </Col>
                    </Row>
                    <Botao variante="primaria" >
                        Entrar
                    </Botao>
                </div>
                <Botao variante="primaria" >
                    Iniciar atendimento
                </Botao>
            </form> */}
        </div>
        
    )
}