import { Tipografia } from "../../Components/Tipografia/Tipografia"
import { CampoTexto } from "../../Components/CampoTexto/CampoTexto"
import { ListaSupensa } from "../../Components/ListaSuspensa/ListaSuspensa"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../Components/Botao/Botao"
import { Link } from "react-router-dom"
import { useCadastroUsuarioContext } from "../../Contexto/CadastroUsuario"

const DadosCadastro = () => {

    const { 
        usuario, 
        setNomeCompleto, 
        setCidade, 
        setEmail, 
        setSenha, 
        setSenhaConfirmada, 
        setUf,
        submeterUsuario
    } = useCadastroUsuarioContext()

    const finalizarCadastro = (evento) => {
        evento.preventDefault();
        submeterUsuario()
    }

    return (
    <form onSubmit={finalizarCadastro}>
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
        </div>
        {usuario.tipo == 1 ? 
            (
            <>
                <Row>
                    <Col>
                        <CampoTexto 
                            titulo="Nome do restaurante" 
                            valor={usuario.nomeCompleto}
                            onChange={setNomeCompleto}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} md={8} sm={8}>
                        <CampoTexto 
                            titulo="Cidade" 
                            valor={usuario.cidade}
                            onChange={setCidade}    
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CampoTexto 
                            titulo="E-mail" 
                            valor={usuario.email}
                            onChange={setEmail}
                            tipo='email'    
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <CampoTexto titulo="Senha"
                            valor={usuario.senha}
                            onChange={setSenha}    
                            tipo='password'    
                        />
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <CampoTexto titulo="Repita a Senha"
                            valor={usuario.senhaConfirmada}
                            onChange={setSenhaConfirmada}    
                            tipo='password'    
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <Link to="/cadastro/interesses">
                            <Botao variante="secundaria">
                                Anterior
                            </Botao>
                        </Link>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <div style={{ textAlign: 'right' }}>
                            {/* <Link to='/cadastro/concluido'> */}
                            <Botao>
                                Próxima
                            </Botao>
                            {/* </Link> */}
                        </div>
                    </Col>
                </Row>
            </>) : null
        }
        {usuario.tipo == 2 ? 
            (
            <>
                <Row>
                    <Col>
                        <CampoTexto 
                            titulo="Nome Completo" 
                            valor={usuario.nomeCompleto}
                            onChange={setNomeCompleto}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} md={8} sm={8}>
                        <CampoTexto 
                            titulo="Cidade" 
                            valor={usuario.cidade}
                            onChange={setCidade}    
                        />
                    </Col>
                </Row>
                
            </>) : null
        }
        {usuario.tipo == 3 ? 
            (
            <>
                <Row>
                    <Col>
                        <CampoTexto 
                            titulo="Nome Completo Cliente" 
                            valor={usuario.nomeCompleto}
                            onChange={setNomeCompleto}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} md={8} sm={8}>
                        <CampoTexto 
                            titulo="Cidade" 
                            valor={usuario.cidade}
                            onChange={setCidade}    
                        />
                    </Col>
                </Row>
                
            </>) : null
        }
    </form>)
}

export default DadosCadastro