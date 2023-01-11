import { FormButtonNav } from "../";
import { useFormData } from "../../../context/formContext";
import { nStep } from "../../../config/nStep";
import { FormStyled } from "../styles";

type Props = {
  currentStep: number,
  prevFormStep: () => void
}

export const FormCompleted = ({ prevFormStep, currentStep }: Props) => {

  const { data } = useFormData()

  return (
    <FormStyled style={currentStep == nStep.steps -1 ? {} : { display: 'none' }}>
      <h2>Thank you for your purchase! 🎉</h2>

      <pre>{JSON.stringify(data)}</pre>

      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
    </FormStyled>
  )
}