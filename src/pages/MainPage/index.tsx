import { MainPageContainer } from "./styles"

import backgroundImage from "../../assets/img/circle_icon_tools.svg"

export const MainPage = () => {
    return(
        <MainPageContainer>
            <img src={backgroundImage} alt="" />
            <h2>Altarede Tools</h2>
            <p>Opções do Aplicativo</p>
            <ul>
                <li>Solicitar ativação</li>
                <li>Solicitar troca de Ont</li>
                <li>Verificar Status Sirenes Gridlab</li>
                <li>Medir distância entre 2 pontos</li>
            </ul>
        </MainPageContainer>
    )
}