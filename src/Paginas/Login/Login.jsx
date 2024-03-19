import { Col, Row } from "react-grid-system"
import { CampoTexto } from "../../Components/CampoTexto/CampoTexto"


export const Login = () => {
    return (
        <>
            <Row>
                <Col>
                    <CampoTexto 
                        titulo="Usuário" 
                        valor={usuario.nomeCompleto}
                        onChange={setNomeCompleto}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={8} md={8} sm={8}>
                    <CampoTexto 
                        titulo="Senha" 
                        valor={usuario.cidade}
                        onChange={setCidade}    
                    />
                </Col>
            </Row>
            <Botao variante="secundaria">
                Entrar
            </Botao>
        </>
    )
}