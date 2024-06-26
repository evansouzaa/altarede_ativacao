import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { useState } from "react";
import { useFormData } from "../../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";
import { formConfig } from "../../../../config/config";
import { FormStepTypes, FormValuesType } from "../../../../types";
import { toast } from "react-toastify";

export const FormClient = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const [loginPrefix] = useState(() => {
    let storedData = localStorage.getItem("login_prefix")
    while (!storedData) storedData = localStorage.getItem("login_prefix")
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData) {
        return parsedData[0]
      }
    }
    return
  })

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      client: {
        nome: "",
        login: loginPrefix,
        plano: ""
      }
    }
  })

  const { setFormValues } = useFormData()

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {
    setFormValues(data)
    nextFormStep()
  }

  const prefixWatch = useWatch({ control, name: "client.login" })
  const loginErrorValidate = () => {
    if (!prefixWatch.includes(loginPrefix) || prefixWatch.length < 5) {
      toast.error("Falha no prefixo, atualizando...")
      setTimeout(() => {
        window.location.reload()
      }, 3000)
      return false
    }
    return true
  };

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
          {...register("client.login", {
            validate: loginErrorValidate
          })}
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