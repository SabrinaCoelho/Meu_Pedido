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

const LayoutBase = () => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        {/* <Col>
                            <FreelandoLogo />
                        </Col> */}
                        <Col >
                            <Link>Sobre</Link>
                        </Col>
                        <Col >
                            <Link>Cadastro</Link>
                        </Col>
                        <Col >
                            <Link>Comanda Digital</Link>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Link>Login</Link>
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <Container style={{ height: '100%' }}>
                <Outlet />
            </Container>
            <Rodape>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo height={40} width={176} />
                            <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
                            <ListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeWhatsApp />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitch">
                                        <IconeTwitch />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Instagram">
                                        <IconeInstagram />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitter">
                                        <IconeTwitter />
                                    </a>
                                </ItemListaInline>
                            </ListaInline>
                        </Col>
                    </Row>
                </Container>
            </Rodape>
        </>
    )
}

export default LayoutBase