import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";
import { formConfig } from "../../../config/formConfig";
import { useState } from "react";
import { FormStepTypes } from "../../../types/types";

export const FormClient = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const [defaultLoginValue, setdefaultLoginValue] = useState(() => {
    const saved: any = localStorage.getItem("estacao");
    const initialValue = JSON.parse(saved);
    return initialValue;
  })

  const { register, handleSubmit } = useForm({
    defaultValues: {
      client: {
        nome: "",
        login: defaultLoginValue[defaultLoginValue.length - 1].match(/^[A-Z]*/),
        plano: ""
      }
    }
  })

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled
      onSubmit={handleSubmit(onSubmit)}
      style={currentStep == orderStep ? {} : { display: 'none' }}
      autoComplete="off">
      <h5>Informações do Cliente</h5>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          className="form-control"
          type="text"
          placeholder="Digite o nome"
          id="name"
          minLength={6}
          {...register("client.nome")}
          onChange={(e) => e.target.value = e.target.value.toUpperCase()}
          required
        />
      </div>
      <div>
        <label htmlFor="login">Login</label>
        <input
          className="form-control"
          type="text"
          inputMode="numeric"
          placeholder='Digite o login'
          minLength={12}
          id='login'
          {...register("client.login")}
          required
        />
      </div>
      <div>
        <label htmlFor="plano">Plano</label>
        <select
          className="form-control"
          placeholder='selecione o plano'
          id='plano'
          {...register("client.plano")}
          required
        >
          <option value="">Selecione...</option>
          {formConfig.planos.map((item, index) => (
            <option value={item.nome} key={index} >{item.nome}</option>
          ))}
        </select>
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}