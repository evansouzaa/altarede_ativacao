import { MainPageContainer } from "./styles"

import backgroundImage from "../../assets/img/background_cloudy.svg"

export const MainPage = () => {
    return (
        <MainPageContainer>
            <div className="content">
                <h2>Altarede Tools</h2>
                <p>Opções do Aplicativo</p>
                <ul>
                    <li>Solicitar ativação</li>
                    <li>Solicitar troca de Ont</li>
                    <li>Verificar Status Sirenes Gridlab</li>
                    <li>Medir distância entre 2 pontos</li>
                </ul>
            </div>
        </MainPageContainer>
    )
}