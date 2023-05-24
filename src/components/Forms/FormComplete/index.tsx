import { FormButtonNav } from "../";
import { useFormData } from "../../../context/formContext";
import { nStep } from "../../../config/steps";
import { FormStyled } from "../styles";
import { Button } from "react-bootstrap";
import { sendDataDb } from "../../../hooks";
import { FormStepButtonsTypes } from "../../../types"
import { formatWppMessage } from "../../../utils";
import Loading from "../../Loading";
import { useState } from "react";

export const FormCompleted = ({ prevFormStep, currentStep }: FormStepButtonsTypes) => {

  const { data } = useFormData()

  const [LoadingStatus] = useState(true)

  const handleButton = () => {
    const wppMessage = formatWppMessage(data)
    sendDataDb(data)
    //console.log(data)
    //send whatsapp message
    window.location.href = `https://wa.me/?text=${encodeURIComponent(wppMessage)}`; 
  }

  return (
    <FormStyled style={currentStep == nStep.steps - 1 ? {} : { display: 'none' }}>
      <h6>Verifique as informações</h6>
      <div className="wppMessage">
        <span style={{ whiteSpace: "pre-line" }}>
          {"position" in data && `${formatWppMessage(data).replaceAll("*", "")}`}
        </span>
      </div>
      <Button
        variant="danger"
        onClick={handleButton}
        className="btn-send-active"
        size="sm"
      >
        Solicitar Ativação
      </Button>
      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
      <Loading status={LoadingStatus}></Loading>
    </FormStyled>
  )
}