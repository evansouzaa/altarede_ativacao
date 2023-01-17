import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";

//types
import { FormStepTypes } from "../../../types/types";

export const FormClientConfig = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const { register, handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == orderStep ? {} : { display: 'none' }} autoComplete="off">
      <h5>Configurações do Cliente</h5>
      <div>
        <label htmlFor="client_ssid">SSiD</label>
        <input className="form-control" type="text" placeholder="Digite o SSiD" id="client_ssid" {...register("client_config.client_ssid")} />
      </div>
      <div>
        <label htmlFor="client_pass">Senha</label>
        <input className="form-control" type="text" placeholder='Digite a senha' id='client_pass' {...register("client_config.client_pass")} />
      </div>
      <br />
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" {...register("client_config.client_ipv6")} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">IPV6</label>
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}