import { nStep } from "../../../config/nStep"
import { Button } from "react-bootstrap"

type FormStepButtonsTypes = {
    currentStep: number,
    prevFormStep: () => void
  }

export const FormButtonNav = ({ currentStep, prevFormStep } : FormStepButtonsTypes) => {
    return (
        <div className="button-box">
            <Button type="button" onClick={prevFormStep} disabled={currentStep <= 0} >Voltar</Button>
            <Button type="submit" disabled={currentStep == nStep.steps - 1}>Proximo</Button>
        </div>
    )
}