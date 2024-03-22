import { Col, Container, Row } from "react-grid-system"
import { Link, Outlet } from "react-router-dom"
import { Cabecalho } from "../Components/Cabecalho/Cabecalho"
import { Rodape } from "../Components/Rodape/Rodape"
import { LoginProvider } from "../Contexto/Login"
import { ComandaProvider } from "../Contexto/Comanda"

const LayoutBase = () => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row style={{padding: "10px"}} align="center">
                        <Col >
                            <Link>Sobre</Link>
                        </Col>
                        <Col >
                            <Link to="/cadastro">Cadastro</Link>
                        </Col>
                        <Col >
                            <Link to="/comanda-digital">Comanda Digital</Link>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Link to="/login">Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <LoginProvider>
                <ComandaProvider>
                    <Container >
                        <Outlet />
                    </Container>
                    {/* <Row justify="center">
                        <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} >
                            <Outlet />
                        </Col>
                    </Row> */}
                    
                </ComandaProvider>
            </LoginProvider>
            <Rodape>
                {/* <Container>
                    
                </Container> */}
            </Rodape>
        </>
    )
}

export default LayoutBase