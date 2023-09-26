import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";
import { formConfig } from "../../../config/config";

//types
import { FormStepTypes } from "../../../types";
import { useState } from "react";

export const FormClientConfig = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const { data, setFormValues } = useFormData()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: unknown, e: any) => {
    e.preventDefault()
    setFormValues(data)
    nextFormStep()
  }

  let ont_wifiFormControl = false
  // eslint-disable-next-line no-prototype-builtins
  if (data.hasOwnProperty("client")) {
    const { ont_wifi }: any = formConfig.planos.find(element => element.nome === data.client.plano)
    ont_wifiFormControl = ont_wifi
  }

  let router_wifiFormControl = false
  // eslint-disable-next-line no-prototype-builtins
  if (data.hasOwnProperty("client")) {
    const { qtd_roteador }: any = formConfig.planos.find(element => element.nome === data.client.plano)
    router_wifiFormControl = qtd_roteador == 1 ? true : false
  }

  const [presetRouter, setPresetRouter] = useState(false)

  return (
    <FormStyled
      onSubmit={handleSubmit(onSubmit)}
      style={currentStep == orderStep ? {} : { display: 'none' }}
      autoComplete="off"
    >
      <h5>Configurações do Cliente</h5>

      {(ont_wifiFormControl || router_wifiFormControl && presetRouter) && (
        <div>
          <label htmlFor="client_ssid">SSiD</label>
          <input
            className="form-control"
            type="text"
            placeholder="Digite o SSiD"
            id="client_ssid"
            {...register("client_config.client_ssid")}
          />
        </div>
      )}

      {(ont_wifiFormControl || router_wifiFormControl && presetRouter) && (
        <div>
          <label htmlFor="client_pass">Senha</label>
          <input
            className="form-control"
            type="text"
            placeholder='Digite a senha'
            id='client_pass'
            {...register("client_config.client_pass")}
            minLength={8}
          />
        </div>
      )}

      <br />

      <div className="row justify-content-center mx-1">
        <div className="row">
          <div className="col-6 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="ipv6"
              {...register("client_config.client_ipv6")}
            />
            <label className="form-check-label" htmlFor="ipv6">IPV6</label>
          </div>

          {router_wifiFormControl && (
            <div className="col-6 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="roteadorpreset"
                {...register("client_config.roteador_preset")}
                onChange={e => setPresetRouter(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="roteadorpreset">Roteador Preset</label>
            </div>
          )}

        </div>

        {(ont_wifiFormControl || router_wifiFormControl && presetRouter) && (
          <div className="row">
            <div className="col-6 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="desmembrar_wifi5"
                {...register("client_config.desmembrar_wifi5")}
              />
              <label className="form-check-label" htmlFor="desmembrar_wifi5">Desmembrar Wifi5</label>
            </div>
          </div>
        )}

      </div>

      <br />

      <div>
        <label htmlFor="tecnicos">Técnicos</label>
        <input className="form-control"
          type="text" placeholder="Nome do(s) técnicos"
          id="tecnicos" {...register("client_config.tecnicos")} />
      </div>

      <div>
        <label htmlFor="obs">Observações</label>
        <textarea
          className="form-control"
          id='obs'
          rows={3}
          {...register("client_config.obs")}
        />
      </div>

      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}