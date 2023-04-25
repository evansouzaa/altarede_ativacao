import { FormButtonNav } from "../";
import { useFormData } from "../../../context/formContext";
import { nStep } from "../../../config/nStep";
import { FormStyled } from "../styles";
import { Button } from "react-bootstrap";
import { sendDataDb } from "../../../hooks";
import { FormStepButtonsTypes } from "../../../types/types"
import { formatWppMessage } from "../../../utils";
import Loading from "../../Loading";

export const FormCompleted = ({ prevFormStep, currentStep }: FormStepButtonsTypes) => {

  const { data } = useFormData()

  const handleButton = () => {
    const wppMessage = formatWppMessage(data)
    console.log(data)
    // window.location.href = `https://wa.me/?text=${encodeURIComponent(wppMessage)}`; //ENVIA WHATSAPP
  }

  return (
    <FormStyled style={currentStep == nStep.steps - 1 ? {} : { display: 'none' }}>
      <h6>Verifique as informações</h6>
      <div className="wppMessage">
        <span style={{ whiteSpace: "pre-line" }}>
          {"position" in data && `${formatWppMessage(data).replaceAll("*", "")}`}
        </span>
      </div>
      <Button variant="danger" onClick={handleButton} className="btn-send-active" size="sm">Solicitar Ativação</Button>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}

// {data.client_config ? (
//   <div>
//     <ul>
//       <li>🔴<b> Ativação Ont </b>🔴</li>
//       <li>=== Informações do Cliente ===</li>
//       <li><b>Nome: </b>{data.client.nome}</li>
//       <li><b>Login: </b>{data.client.login}</li>
//       <li><b>Plano: </b>{data.client.plano}</li>
//       <li>=== Documentação de Rede ===</li>
//       <li><b>Estação: </b>{data.network_doc.estacao}</li>
//       <li><b>Área: </b>{data.network_doc.area}</li>
//       <li><b>CTO: </b>{data.network_doc.cto}</li>
//       <li><b>Porta: </b>{data.network_doc.porta}</li>
//       <li><b>Potência Cto: </b>{data.network_doc.potencia_cto}</li>
//       <li>=== Ativos de Rede ===</li>
//       <li><b>Modelo Ont: </b>{data.network_actives.modelo_ont}</li>
//       <li><b>Serial Ont: </b>{data.network_actives.serial_ont}</li>
//       {data.network_actives.serial_roteador_1 && (
//         <>
//           <li><b>Modelo Roteador: </b>{data.network_actives.modelo_roteador}</li>
//           <li><b>Serial Roteador 1: </b>{data.network_actives.serial_roteador_1}</li>
//         </>
//       )}
//       {data.network_actives.serial_roteador_2 && (
//         <>
//           <li><b>Serial Roteador 2: </b>{data.network_actives.serial_roteador_2}</li>
//         </>
//       )}
//       {data.network_actives.serial_roteador_3 && (
//         <>
//           <li><b>Serial Roteador 3: </b>{data.network_actives.serial_roteador_3}</li>
//         </>
//       )}
//       <li>=== Material Utilizado ===</li>
//       {!!data.material_used.fibra && (<li><b>Fibra: </b>{data.material_used.fibra}</li>)}
//       {!!data.material_used.alca && (<li><b>Alça: </b>{data.material_used.alca}</li>)}
//       {!!data.material_used.nylon && (<li><b>Nylon: </b>{data.material_used.nylon}</li>)}
//       {!!data.material_used.pto && (<li><b>Pto: </b>{data.material_used.pto}</li>)}
//       {!!data.material_used.cabo_utp && (<li><b>Cabo Utp: </b>{data.material_used.cabo_utp}</li>)}
//       {!!data.material_used.fixa_fio && (<li><b>Fixa Fio: </b>{data.material_used.fixa_fio}</li>)}
//       {!!data.material_used.conector_rj45 && (<li><b>Conec. RJ45: </b>{data.material_used.conector_rj45}</li>)}
//       {!!data.material_used.conector_apc && (<li><b>Conec. APC: </b>{data.material_used.conector_apc}</li>)}
//       {!!data.material_used.conector_upc && (<li><b>Conec. UPC: </b>{data.material_used.conector_upc}</li>)}
//       {!!data.material_used.cordao_apc_apc && (<li><b>Cord. APC/APC: </b>{data.material_used.cordao_apc_apc}</li>)}
//       {!!data.material_used.cordao_apc_upc && (<li><b>Cord. APC/UPC: </b>{data.material_used.cordao_apc_upc}</li>)}
//       <li>=== Configurações do Cliente ===</li>
//       {!!data.client_config.client_ssid && (<li><b>SSiD: </b>{data.client_config.client_ssid}</li>)}
//       {!!data.client_config.client_pass && (<li><b>Senha: </b>{data.client_config.client_pass}</li>)}
//       <li><b>Ipv6: </b>{data.client_config.client_ipv6 ? "Sim" : "Não"}</li>
//       <li><b>Roteador Preset: </b>{data.client_config.roteador_preset ? "Sim" : "Não"}</li>
//       <li><b>Desmembrar Wifi_5: </b>{data.client_config.desmembrar_wifi ? "Sim" : "Não"}</li>
//       {!!data.client_config.obs && (<li><b>Observações: </b>{data.client_config.obs}</li>)}
//       <li>=== Localização ===</li>
//       {data.position && (<li><b>Lat, Lng: </b>{data.position.lat + ", " + data.position.lng}</li>)}
//     </ul>
//   </div>
// ) : (<div>Ocorreu algum erro, verifique a ativação ou recarregue a página!</div>)}