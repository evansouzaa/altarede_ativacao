import { nStep } from "../../../config/nStep"

type Props = {
    currentStep: number,
    prevFormStep: () => void
  }

export const FormButtonNav = ({ currentStep, prevFormStep } : Props) => {
    return (
        <div>
            <button type="button" onClick={prevFormStep} disabled={currentStep <= 0} >Voltar</button>
            <button type="submit" disabled={currentStep == nStep.steps -1}>Proximo</button>
        </div>
    )
}