import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";
import { formConfig } from "../../../config/formConfig";

import { FormStepTypes } from "../../../types/types";

export const FormClient = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const { register, handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == orderStep ? {} : { display: 'none' }} autoComplete="off">
      <h5>Informações do Cliente</h5>
      <div>
        <label htmlFor="name">Nome</label>
        <input className="form-control" type="text" placeholder="Digite o nome" id="nome" {...register("client.nome")} required />
      </div>
      <div>
        <label htmlFor="login">Login</label>
        <input className="form-control" type="text" placeholder='Digite o login' id='login' {...register("client.login")} required />
      </div>
      <div>
        <label htmlFor="plano">Plano</label>
        <select className="form-control" placeholder='selecione o plano' id='plano' {...register("client.plano")} required>
          <option value="">Selecione...</option>
          {formConfig.plano.map((item, index) =>(
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}