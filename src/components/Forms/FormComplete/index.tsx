import { FormButtonNav } from "../";
import { useFormData } from "../../../context/formContext";
import { nStep } from "../../../config/nStep";
import { FormStyled } from "../styles";

import { FormStepButtonsTypes } from "../../../types/types"

export const FormCompleted = ({ prevFormStep, currentStep }: FormStepButtonsTypes) => {

  const { data } = useFormData()

  return (
    <FormStyled style={currentStep == nStep.steps - 1 ? {} : { display: 'none' }}>
      <h6>Verifique as informações</h6>
      {data.client_config ? (
        <div>
          <ul>
            <li>🔴<b>Ativação Ont</b>🔴</li>
            <hr />
            <li><b>Nome: </b>{data.client.nome}</li>
            <li><b>Login: </b>{data.client.login}</li>
            <li><b>Plano: </b>{data.client.plano}</li>
            <hr />
            <li><b>Estação: </b>{data.network_doc.estacao}</li>
            <li><b>Área: </b>{data.network_doc.area}</li>
            <li><b>CTO: </b>{data.network_doc.cto}</li>
            <li><b>Porta: </b>{data.network_doc.porta}</li>
            <li><b>Potência Cto: </b>{data.network_doc.potencia_cto}</li>
            <hr />
            <li><b>Modelo Ont: </b>{data.network_actives.ont_modelo}</li>
            <li><b>Serial Ont: </b>{data.network_actives.serial_ont}</li>
            {data.network_actives.modelo_roteador_1 && (
              <>
                <li><b>Modelo Roteador 1: </b>{data.network_actives.modelo_roteador_1}</li>
                <li><b>Serial Roteador 1: </b>{data.network_actives.serial_roteador_1}</li>
              </>
            )}
            {data.network_actives.modelo_roteador_2 && (
              <>
                <li><b>Modelo Roteador 2: </b>{data.network_actives.modelo_roteador_2}</li>
                <li><b>Serial Roteador 2: </b>{data.network_actives.serial_roteador_2}</li>
              </>
            )}
            {data.network_actives.modelo_roteador_3 && (
              <>
                <li><b>Modelo Roteador 3: </b>{data.network_actives.modelo_roteador_3}</li>
                <li><b>Serial Roteador 3: </b>{data.network_actives.serial_roteador_3}</li>
              </>
            )}
            <hr />
            {!!data.material_used.fibra && (<li><b>Fibra: </b>{data.material_used.fibra}</li>)}
            {!!data.material_used.alca && (<li><b>Alça: </b>{data.material_used.alca}</li>)}
            {!!data.material_used.nylon && (<li><b>Nylon: </b>{data.material_used.nylon}</li>)}
            {!!data.material_used.pto && (<li><b>Pto: </b>{data.material_used.pto}</li>)}
            {!!data.material_used.cabo_utp && (<li><b>Cabo Utp: </b>{data.material_used.cabo_utp}</li>)}
            {!!data.material_used.fixa_fio && (<li><b>Fixa Fio: </b>{data.material_used.fixa_fio}</li>)}
            {!!data.material_used.onector_rj45 && (<li><b>Rj45: </b>{data.material_used.onector_rj45}</li>)}
            {!!data.material_used.conector_apc && (<li><b>Conec. Apc: </b>{data.material_used.conector_apc}</li>)}
            {!!data.material_used.conector_upc && (<li><b>Conec. Upc: </b>{data.material_used.conector_upc}</li>)}
            {!!data.material_used.cordao_apc_apc && (<li><b>Cord. APC/APC: </b>{data.material_used.cordao_apc_apc}</li>)}
            {!!data.material_used.cordao_apc_upc && (<li><b>Cord. APC/UPC: </b>{data.material_used.cordao_apc_upc}</li>)}
            <hr />
            {/* {data.position.lat && data.position.lng ? (
              <li><b>Lat Lng: </b>{data.position.lat + ", " + data.position.lng}</li>
            ):(
              <li><b>Lat Lng: </b>Localização não enviada.</li>
            )} */}
          </ul>
        </div>
      ) : (<div>Ocorreu algum erro, verifique a ativação ou recarregue a página!</div>)}
      {/* <pre>{JSON.stringify(data)}</pre> */}
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}