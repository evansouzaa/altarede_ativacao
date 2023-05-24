import { nStep } from "../../../config/steps"
import { Button } from "react-bootstrap"

import { FormStepButtonsTypes } from "../../../types"

export const FormButtonNav = ({ currentStep, prevFormStep, buttonDisable }: FormStepButtonsTypes) => {
    return (
        <div className="button-box">
            <Button
                type="button"
                onClick={prevFormStep}
                disabled={currentStep <= 0}
            >
                Voltar
            </Button>
            <Button
                type="submit"
                disabled={currentStep == nStep.steps - 1 || buttonDisable}
            >
                Proximo
            </Button>
        </div>
    )
}