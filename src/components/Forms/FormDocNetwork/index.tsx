import { useForm } from "react-hook-form";
import { FormStyled } from "../styles";
import { FormButtonNav } from "../FormButtonsNav";
import { useFormData } from "../../../context/formContext";
import { formConfig } from "../../../config/formConfig";

//types
import { FormStepTypes } from "../../../types/types";

export const FormDocNetwork = ({ nextFormStep, prevFormStep, currentStep }: FormStepTypes) => {

  const { register, handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == 1 ? {} : { display: 'none' }}>
      <h5>Documentação de rede</h5>
      <div>
        <label htmlFor="estacao">Estação</label>
        <select className="form-control" placeholder='selecione o estacao' id='estacao' {...register("estacao")} required>
          <option value="">Selecione...</option>
          {formConfig.estacao.map((item, index) => (
            <option value={index} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="area">Area</label>
        <select className="form-control" placeholder='selecione o area' id='area' {...register("area")} required>
          <option value="">Selecione...</option>
          {formConfig.area.map((item, index) => (
            <option value={index} key={index} >A{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cto">Cto</label>
        <select className="form-control" placeholder='selecione o cto' id='cto' {...register("cto")} required>
          <option value="">Selecione...</option>
          {formConfig.cto.map((item, index) => (
            <option value={index} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="porta">Porta</label>
        <select className="form-control" placeholder='selecione a porta' id='porta' {...register("porta")} required>
          <option value="">Selecione...</option>
          {formConfig.porta.map((item, index) => (
            <option value={index} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="potencia_cto">Potência cto</label>
        <input className="form-control" type="number" placeholder="Ex: 23.40" id="potencia_cto" {...register("potencia_cto")} required />
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}