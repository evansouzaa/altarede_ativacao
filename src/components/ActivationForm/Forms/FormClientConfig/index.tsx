import { SubmitHandler, useForm } from "react-hook-form";
import { useFormData } from "../../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";
import { formConfig } from "../../../../config/config";

//types
import { FormStepTypes, FormValuesType } from "../../../../types";
import { useState } from "react";

export const FormClientConfig = ({ nextFormStep, prevFormStep, currentStep, orderStep }: FormStepTypes) => {

  const { data, setFormValues } = useFormData()

  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {
    setFormValues(data)
    nextFormStep()
  }

  let ontWifiFormControl = false
  let router_wifiFormControl = false
  // eslint-disable-next-line no-prototype-builtins
  if (data.hasOwnProperty("client")) {
    const { ont_wifi, qtd_roteador }: any = formConfig.planos.find(element => element.nome === data.client.plano)
    ontWifiFormControl = ont_wifi
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

      {(ontWifiFormControl || router_wifiFormControl && presetRouter) && (
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

      {(ontWifiFormControl || router_wifiFormControl && presetRouter) && (
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

        <div className="row">
          {(ontWifiFormControl || router_wifiFormControl && presetRouter) && (
            <div className="col-6 form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="desmembrar_wifi5"
                {...register("client_config.desmembrar_wifi5")}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="desmembrar_wifi5">Desmembrar Wifi5</label>
            </div>
          )}

          <div className="col-6 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="mudanca_endereco"
              {...register("client_config.mudanca_endereco")}
            />
            <label className="form-check-label" htmlFor="mudanca_endereco">Mudança Endereço</label>
          </div>

          <div className="col-6 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="mudanca_plano"
              {...register("client_config.mudanca_plano")}
            />
            <label className="form-check-label" htmlFor="mudanca_plano">Mudança Plano</label>
          </div>
        </div>

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