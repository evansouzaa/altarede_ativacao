import { SubmitHandler, useForm } from "react-hook-form";
import { FormStyled } from "../styles";
import { FormButtonNav } from "../FormButtonsNav";
import { useFormData } from "../../../context/formContext";
import { formConfig } from "../../../config/config";

import { FormStepTypes, FormValuesType } from "../../../types";

export const FormDocNetwork = ({
  nextFormStep,
  prevFormStep,
  currentStep,
  orderStep
}: FormStepTypes) => {

  const { register, handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled
      onSubmit={handleSubmit(onSubmit)}
      style={currentStep == orderStep ? {} : { display: 'none' }}
      autoComplete="off"
    >
      <h5>Documentação de rede</h5>
      <div>
        <label htmlFor="estacao">Estação</label>
        <select
          className="form-control"
          id='estacao'
          {...register("network_doc.estacao")}
          required
        >
          <option value="">Selecione...</option>
          {formConfig.estacao.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="area">Area</label>
        <select
          className="form-control"
          placeholder='selecione o area'
          id='area'
          {...register("network_doc.area")}
          required
        >
          <option value="">Selecione...</option>
          {formConfig.area.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cto">Cto</label>
        <select
          className="form-control"
          placeholder='selecione o cto'
          id='cto'
          {...register("network_doc.cto", { valueAsNumber: true })}
          required
        >
          <option value="">Selecione...</option>
          {formConfig.cto.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="porta">Porta</label>
        <select
          className="form-control"
          placeholder='selecione a porta'
          id='porta'
          {...register("network_doc.porta", { valueAsNumber: true })}
          required
        >
          <option value="">Selecione...</option>
          {formConfig.porta.map((item, index) => (
            <option value={item} key={index} >{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="potencia_cto">Potência cto</label>
        <input
          className="form-control"
          type="number"
          placeholder="Ex: 23.40"
          step="00.01"
          id="potencia_cto"
          {...register("network_doc.potencia_cto", { valueAsNumber: true })}
          required
        />
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}