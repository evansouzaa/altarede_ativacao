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

  let routerFormControl = 0
  if (data.hasOwnProperty("client")) {
    const { qtd_roteador }: any = formConfig.planos.find(element => element.nome === data.client.plano)
    routerFormControl = qtd_roteador
  }


  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == orderStep ? {} : { display: 'none' }}>
      <h5>Inventário de Rede</h5>
      <div>
        <label htmlFor="ont_modelo">Modelo da Ont</label>
        <select className="form-control" id='ont_modelo' {...register("network_actives.ont_modelo")} required>
          <option value="">Selecione...</option>
          {formConfig.modelo_ont.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="serial_ont">Serial Ont</label>
        <input className="form-control" type="text" placeholder='Digite o SN Ont' id='serial_ont' {...register("network_actives.serial_ont")} required />
      </div>
      {Array.from(Array(routerFormControl)).map((item, index) => (
        <div key={index}>
          <div>
            <label htmlFor="modelo_roteador">Modelo Roteador {index + 1}</label>
            <select className="form-control" placeholder='Selecione...' id='modelo_roteador' {...register(`network_actives.modelo_roteador_${index + 1}`)} required>
              <option value="">Selecione...</option>
              {formConfig.modelo_roteador.map((item, index) => (
                <option value={item} key={index} >{item}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="serial_ont">Serial Roteador {index + 1}</label>
            <input className="form-control" type="text" placeholder='Digite o SN Roteador' id='serial_roteador' {...register(`network_actives.serial_roteador_${index + 1}`)} required />
          </div>
        </div>
      ))}
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}