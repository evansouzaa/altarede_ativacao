import { MainPageContainer } from "./styles"

export const MainPage = () => {
    return (
        <MainPageContainer>
            <div className="content">
                <h2>Altarede Tools</h2>
                <p>Opções do Aplicativo</p>
                <ul>
                    <li>Solicitar ativação ✅</li>
                    <li><s>Solicitar troca de Ont</s> ❌</li>
                    <li><s>Status Sirenes Gridlab</s> ❌</li>
                    <li><s>Distância entre 2 pontos</s> ❌</li>
                </ul>
            </div>
        </MainPageContainer>
    )
}