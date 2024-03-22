import {Card} from "../Card"
import { Tipografia } from "../Tipografia/Tipografia"

export const ItemCardapio = () => {

    return(
        <Card >
            <Tipografia variante={h1} componente={bodyBold}>
                Nome
            </Tipografia>
            <Tipografia variante={h2} componente={body}>
                Descrição
            </Tipografia>
            <Tipografia variante={body} componente={body}>
                Descrição
            </Tipografia>
        </Card>
    )
}