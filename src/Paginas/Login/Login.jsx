import { Col, Row } from "react-grid-system"
import { CampoTexto } from "../../Components/CampoTexto/CampoTexto"
import { useLoginContext } from "../../Contexto/Login"
import { Botao } from "../../Components/Botao/Botao"


export const Login = () => {

    const {
        login,
        setEmail,
        setSenha
    } = useLoginContext()

    const entrar = (event) => {
        event.preventDefault();
        console.log(login)
    }
    
    return (
        <div>
            <form onSubmit={entrar}>
                <Row justify="center" >
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} >
                    <Row>
                        <Col>
                            <CampoTexto 
                                titulo="Usuário" 
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
                    </Col>
                </Row>
            </form>
        </div>
        
    )
}