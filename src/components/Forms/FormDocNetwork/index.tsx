import { useForm } from "react-hook-form";
import { FormStyled } from "../styles";

type Props = {
  currentStep: number,
  nextFormStep: () => void,
  prevFormStep: () => void
}

export const FormDocNetwork = ({ nextFormStep, prevFormStep, currentStep }: Props) => {

  const { register, handleSubmit } = useForm({ mode: "all" })

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    nextFormStep()

    console.log(data)
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == 1 ? {} : { display: 'none' }}>
      <h3>Documentação de rede</h3>
      <div>
        <label htmlFor="estacao">Selecione a Estação</label>
        <select placeholder='selecione o estacao' id='estacao' {...register("estacao")} required>
          <option value="">Selecione...</option>
          <option value="1">EST1</option>
          <option value="2">EST2</option>
          <option value="3">EST3</option>
        </select>
      </div>
      <div>
        <label htmlFor="area">Selecione a Area</label>
        <select placeholder='selecione o area' id='area' {...register("area")} required>
          <option value="">Selecione...</option>
          <option value="1">A1</option>
          <option value="2">A2</option>
          <option value="3">A3</option>
        </select>
      </div>
      <div>
        <label htmlFor="cto">Selecione a Cto</label>
        <select placeholder='selecione o cto' id='cto' {...register("cto")} required>
          <option value="">Selecione...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <button type="button" onClick={prevFormStep} disabled={currentStep <= 0} >Voltar</button>
      <button disabled={currentStep >= 2}>Proximo</button>
    </FormStyled>
  )
}