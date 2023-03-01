import { MainPageContainer } from "./styles"

import backgroundImage from "../../assets/img/background_cloudy.svg"

export const MainPage = () => {
    return (
        <MainPageContainer>
            <div className="content">
                <h2>Altarede Tools</h2>
                <p>Opções do Aplicativo</p>
                <ul>
                    <li>Solicitar ativação ✅</li>
                    <li><s>Solicitar troca de Ont</s> ❌</li>
                    <li><s>Verificar Status Sirenes Gridlab</s> ❌</li>
                    <li><s>Medir distância entre 2 pontos</s> ❌</li>
                </ul>
            </div>
        </MainPageContainer>
    )
}