import { Col, Container, Row } from "react-grid-system"
import { Outlet } from "react-router-dom"
import { Cabecalho } from "../Components/Cabecalho/Cabecalho"
import { FreelandoLogo } from "../Components/Icones/FreelandoLogo"
import { IconeInstagram } from "../Components/Icones/IconeInstagram"
import { IconeTwitch } from "../Components/Icones/IconeTwitch"
import { IconeTwitter } from "../Components/Icones/IconeTwitter"
import { IconeWhatsApp } from "../Components/Icones/IconeWhatsApp"
import { Link } from "../Components/Link/Link"
import { ItemListaInline } from "../Components/Lista/ItemListaInline"
import { ListaInline } from "../Components/Lista/ListaInline"
import { Rodape } from "../Components/Rodape/Rodape"
import { Tipografia } from "../Components/Tipografia/Tipografia"
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