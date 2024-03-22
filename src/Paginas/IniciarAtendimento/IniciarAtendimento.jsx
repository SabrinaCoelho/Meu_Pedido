import { Col, Row } from "react-grid-system"
import { CampoTexto } from "../../Components/CampoTexto/CampoTexto"
import { useLoginContext } from "../../Contexto/Login"
import { Botao } from "../../Components/Botao/Botao"
import { useComandaContext } from "../../Contexto/Comanda"


export const IniciarAtendimento = () => {

    const {
        comanda,
        setErro,
        setAtendente,
        setCliente,
        setMesa,
        setComandaID,
        setInicio,
        setTermino,
        submeterComanda
    } = useComandaContext()

    const iniciarAtendimento = (event) => {
        event.preventDefault();
        console.log(comanda)
    }
    
    return (
        <div>
            <form onSubmit={iniciarAtendimento}>
                <Row justify="center" >
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} >
                        <Row>
                            <Col>
                                <CampoTexto 
                                    titulo="Cliente" 
                                    valor={comanda.cliente}
                                    onChange={setCliente}
                                    tipo="text"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CampoTexto 
                                    titulo="Mesa" 
                                    valor={comanda.mesa}
                                    onChange={setMesa}
                                    tipo="text"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CampoTexto 
                                    titulo="Comanda digital" 
                                    valor={comanda.comandaID}
                                    onChange={setComandaID}
                                    tipo="text"
                                />
                            </Col>
                        </Row>
                        <Botao variante="primaria" >
                            Iniciar atendimento
                        </Botao>
                    </Col>
                </Row>
            </form>
        </div>
        
    )
}