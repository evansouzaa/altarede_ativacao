import { useForm } from "react-hook-form";
import { useFormData } from "../../../context/formContext";
import { FormButtonNav } from "../FormButtonsNav";
import { FormStyled } from "../styles";

type Props = {
  currentStep: number,
  prevFormStep: () => void,
  nextFormStep: () => void,
}

export const FormClient = ({ nextFormStep, prevFormStep, currentStep }: Props) => {

  const { register, handleSubmit } = useForm()

  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    console.log(data)
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == 0 ? {} : { display: 'none' }}>
      <h3>Dados do Cliente</h3>
      <div>
        <label htmlFor="name">Nome do Cliente</label>
        <input type="text" placeholder="Digite o seu nome" id="name" {...register("name")} required />
      </div>
      <div>
        <label htmlFor="login">Login do Cliente</label>
        <input type="text" placeholder='Digite o login' id='login' {...register("login")} required />
      </div>
      <div>
        <label htmlFor="plano">Selecione o Plano</label>
        <select placeholder='selecione o plano' id='plano' {...register("plano")} required>
          <option value="">Selecione...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <br />
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}