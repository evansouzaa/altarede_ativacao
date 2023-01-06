import { useForm } from "react-hook-form";
import { FormStyled } from "../styles";
import { FormButtonNav } from "../FormButtonsNav";
import { useFormData } from "../../../context/formContext";

type Props = {
  currentStep: number,
  nextFormStep: () => void,
  prevFormStep: () => void
}
export const FormInventoryNetwork = ({ nextFormStep, prevFormStep, currentStep }: Props) => {

  const { register, handleSubmit } = useForm()
  const { setFormValues } = useFormData()

  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    console.log(data)
    setFormValues(data)
    nextFormStep()
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)} style={currentStep == 2 ? {} : { display: 'none' }}>
      <h3>Inventário de Rede</h3>
      <div>
        <label htmlFor="modelo_ont">Selecione modelo Ont</label>
        <select placeholder='Selecione...' id='modelo_ont' {...register("modelo_ont")} required>
          <option value="">Selecione...</option>
          <option value="1">EST1</option>
          <option value="2">EST2</option>
          <option value="3">EST3</option>
        </select>
      </div>
      <div>
        <label htmlFor="serial_ont">Serial Ont</label>
        <input type="text" placeholder='Digite o serial_ont' id='serial_ont' {...register("serial_ont")} required />
      </div>
      <div>
        <label htmlFor="modelo_roteador">Modelo Roteador</label>
        <select placeholder='Selecione...' id='modelo_roteador' {...register("modelo_roteador")} required>
          <option value="">Selecione...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div>
        <label htmlFor="serial_ont">Serial Roteador</label>
        <input type="text" placeholder='Digite o serial_ont' id='serial_ont' {...register("serial_ont")} required />
      </div>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}