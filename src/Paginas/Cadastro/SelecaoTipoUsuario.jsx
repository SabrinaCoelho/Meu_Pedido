import { Tipografia } from "../../Components/Tipografia/Tipografia"
import GrupoRadio from "../../Components/Radio/GrupoRadio"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../Components/Botao/Botao"
import { Link, useNavigate } from "react-router-dom"
import { useCadastroUsuarioContext } from "../../Contexto/CadastroUsuario"
import { useEffect } from "react"

const opcoes = [
    {
        valor: 1,
        label: 'Restaurante',
    },
    {
        valor: 2,
        label: 'Atendente',
    },
    {
        valor: 3,
        label: 'Cliente',
    }
]

const SelecaoTipoUsuario = () => {
    const { usuario, setTipo } = useCadastroUsuarioContext()

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante='h3' componente='h2'>
                    O que você é?
                </Tipografia>
            </div>
            <GrupoRadio 
                opcoes={opcoes} 
                valor={usuario.tipo} 
                onChange={setTipo} 
            />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/cadastro">
                        <Botao variante="secundaria">
                            Anterior
                        </Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        <Link to='/cadastro/dados-cadastro'>
                            <Botao>
                                Próxima
                            </Botao>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SelecaoTipoUsuario