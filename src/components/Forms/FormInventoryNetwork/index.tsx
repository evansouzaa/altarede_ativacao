import { useForm } from "react-hook-form";
import { FormStyled } from "../styles";
import { FormButtonNav } from "../FormButtonsNav";
import { useFormData } from "../../../context/formContext";
import { formConfig } from "../../../config/formConfig";

import { FormStepTypes } from "../../../types/types";

export const FormInventoryNetwork = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {
  const { register, handleSubmit } = useForm()
  const { data, setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
  }

  //verifica se no objeto cliente e seta a quantidade de campos de roteador
  let routerFormControl = 0
  if (data.hasOwnProperty("client")) {
    const { qtd_roteador }: any = formConfig.planos.find(element => element.nome === data.client.plano)
    routerFormControl = qtd_roteador
  }


  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == orderStep ? {} : { display: 'none' }} autoComplete="off">
      <h5>Inventário de Rede</h5>
      <div>
        <label htmlFor="modelo_ont">Modelo da Ont</label>
        <select className="form-control" id='modelo_ont' {...register("network_actives.modelo_ont")} required>
          <option value="">Selecione...</option>
          {formConfig.modelo_ont.map((item, index) => (
            <option value={item.modelo} key={index} >{item.modelo}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="serial_ont">Serial Ont</label>
        <input className="form-control" type="text" placeholder='Digite o SN Ont' id='serial_ont' {...register("network_actives.serial_ont")} required />
      </div>
      {!!routerFormControl && (
        <div>
          <label htmlFor="modelo_roteador">Modelo Roteador</label>
          <select className="form-control" placeholder='Selecione...' id='modelo_roteador' {...register(`network_actives.modelo_roteador`)} required>
            <option value="">Selecione...</option>
            {formConfig.modelo_roteador.map((item, index) => (
              <option value={item} key={index} >{item}</option>
            ))}
          </select>
        </div>
      )}
      {Array.from(Array(routerFormControl)).map((item, index) => (
        <div key={index}>
          <label htmlFor="serial_ont">Serial Roteador {index + 1}</label>
          <input className="form-control" type="text" placeholder='Digite o SN Roteador' id='serial_roteador' {...register(`network_actives.serial_roteador_${index + 1}`)} required />
        </div>
      ))}
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep}/>
    </FormStyled>
  )
}