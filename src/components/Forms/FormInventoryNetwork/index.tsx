import { useForm } from "react-hook-form";
import { FormStyled } from "../styles";
import { FormButtonNav } from "../FormButtonsNav";
import { useFormData } from "../../../context/formContext";
import { formConfig } from "../../../config/formConfig";

import { FormStepTypes } from "../../../types/types";

export const FormInventoryNetwork = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const { register, handleSubmit } = useForm()
  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
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
      <div>
        <label htmlFor="modelo_roteador">Modelo Roteador</label>
        <select className="form-control" placeholder='Selecione...' id='modelo_roteador' {...register("network_actives.modelo_roteador")} required>
          <option value="">Selecione...</option>
          {formConfig.modelo_roteador.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="serial_ont">Serial Roteador</label>
        <input className="form-control" type="text" placeholder='Digite o SN Roteador' id='serial_roteador' {...register("network_actives.serial_roteador")} required />
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}