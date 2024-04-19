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

  const [wifiName, setWifiName] = useState("")

  const handleInputChange = (event: any) => {
    const newValue = event.target.value.replace(/[^a-zA-Z0-9\s]/g, '');
    setWifiName(newValue);
  }

  return (
    <FormStyled
      onSubmit={handleSubmit(onSubmit)}
      style={currentStep == orderStep ? {} : { display: 'none' }}
      autoComplete="off"
    >
      <h5>Configurações do Cliente</h5>

      {(ontWifiFormControl || router_wifiFormControl && presetRouter) && (
        <div>
          <label htmlFor="client_ssid">Nome Wi-Fi</label>
          <input
            className="form-control"
            type="text"
            placeholder="Digite o nome da Wi-Fi"
            id="client_ssid"
            required
            value={wifiName}
            onInput={handleInputChange}
            maxLength={30}
            {...register("client_config.client_ssid")}
          />
          <label htmlFor="client_pass">Senha</label>
          <input
            className="form-control"
            type="text"
            placeholder='Digite a senha Wi-fi do cliente'
            id='client_pass'
            required
            minLength={8}
            maxLength={32}
            {...register("client_config.client_pass")}
          />
          <div className="row">
            <div className="col">
              <label htmlFor="wifi4_channel">Canal Wi-Fi 4</label>
              <select
                className="form-control"
                id='wifi4_channel'
                {...register("client_config.wifi4_channel")}
                required
              >
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="6">6</option>
                <option value="11">11</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="wifi5_channel">Canal Wi-Fi 5</label>
              <select
                className="form-control"
                id='wifi5_channel'
                {...register("client_config.wifi5_channel")}
                required
              >
                <option value="">Selecione...</option>
                <option value="36">36</option>
                <option value="52">52 (DFS)</option>
                <option value="100">100 (DFS)</option>
                <option value="116">116 (DFS)</option>
                <option value="132">132 (DFS)</option>
                <option value="149">149</option>
              </select>
            </div>
          </div>

        </div>
      )}


      <br />

      <div className="row justify-content-center mx-1">
        <div className="row">
          {/* <div className="col-6 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="ipv6"
              {...register("client_config.client_ipv6")}
            />
            <label className="form-check-label" htmlFor="ipv6">IPV6</label>
          </div> */}

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
        <input
          className="form-control"
          type="text"
          placeholder="Nome do(s) técnicos"
          id="tecnicos"
          required
          {...register("client_config.tecnicos")}
        />
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