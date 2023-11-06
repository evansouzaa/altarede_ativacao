import { SubmitHandler, useForm } from "react-hook-form";
import { FormStyled } from "../styles";
import { FormButtonNav } from "../FormButtonsNav";
import { useFormData } from "../../../../context/formContext";
import { formConfig } from "../../../../config/config";

import { FormStepTypes, FormValuesType } from "../../../../types";
import { useState } from "react";

export const FormInventoryNetwork = ({
  nextFormStep,
  prevFormStep,
  currentStep,
  orderStep
}: FormStepTypes) => {
  const { register, handleSubmit } = useForm()
  const { data, setFormValues } = useFormData()

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {
    setFormValues(data)
    nextFormStep()
  }

  const [prefix, setPrefix] = useState("")
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    if (option) {
      const prefix = formConfig.modelo_ont.find(element => element.modelo === option)
      prefix ? setPrefix(prefix.sn_prefix) : ""
    }
    setInputValue("")
  };

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toUpperCase());
  };

  //verifica se no objeto cliente e seta a quantidade de campos de roteador e se possui onu_wifi true false
  let routerFormControl = 0
  let wifiFormControl = false
  // eslint-disable-next-line no-prototype-builtins
  if (data.hasOwnProperty("client")) {
    const { qtd_roteador, wifi }: any = formConfig.planos.find(element => element.nome === data.client.plano)
    routerFormControl = qtd_roteador
    wifiFormControl = wifi
  }

  //configure list ont_wifi / ont_bridge
  const ontWifiList = formConfig.modelo_ont.filter(item => item.ont_wifi === true)
  const ontBridgeList = formConfig.modelo_ont.filter(item => item.ont_wifi === false)

  return (
    <FormStyled
      onSubmit={handleSubmit(onSubmit)}
      style={currentStep == orderStep ? {} : { display: 'none' }}
      autoComplete="off"
    >
      <h5>Inventário de Rede</h5>

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
        </div>
      </div>

      <div className="row">
        <div>
          <label htmlFor="modelo_ont">Modelo da Ont Antiga</label>
          {wifiFormControl ? (
            <select
              className="form-control"
              id='modelo_ont'
              {...register("network_actives.modelo_ont")}
              required
              onChange={handleSelectChange}
            >
              <option value="">Selecione...</option>
              {ontWifiList.map((item, index) => (
                <option value={item.modelo} key={index} >{item.modelo}</option>
              ))}
            </select>
          ) : (
            <select
              className="form-control"
              id='modelo_ont'
              {...register("network_actives.modelo_ont")}
              required
              onChange={handleSelectChange}
            >
              <option value="">Selecione...</option>
              {ontBridgeList.map((item, index) => (
                <option value={item.modelo} key={index} >{item.modelo}</option>
              ))}
            </select>
          )}
        </div>
        <div>
          <label htmlFor="serial_ont">Serial Ont Antigo</label>
          <input
            className="form-control"
            type="text"
            placeholder='Somente 8 ultimos caracteres'
            id='serial_ont'
            {...register("network_actives.serial_ont", {
              pattern: /[A-Fa-f0-9]$/,
              setValueAs: value => prefix + value
            })}
            maxLength={8}
            minLength={8}
            value={inputValue}
            onChange={handleInputChange}
            required />
        </div>
        {!!routerFormControl && (
          <div>
            <label htmlFor="modelo_roteador">Modelo Roteador</label>
            <select
              className="form-control"
              placeholder='Selecione...'
              id='modelo_roteador'
              {...register(`network_actives.modelo_roteador`)}
              required
            >
              <option value="">Selecione...</option>
              {formConfig.modelo_roteador.map((item, index) => (
                <option value={item} key={index} >{item}</option>
              ))}
            </select>
          </div>
        )}
        {Array.from(Array(routerFormControl)).map((item, index) => (
          <div key={index}>
            <label htmlFor="serial_ont">Serial Roteador {index + 1}</label>
            <input
              className="form-control"
              type="text"
              placeholder='Digite o SN Roteador'
              id='serial_roteador'
              {...register(`network_actives.serial_roteador_${index + 1}`, {
                setValueAs: value => value.toUpperCase()
              })}
              required
            />
          </div>
        ))}
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />

    </FormStyled>
  )
}