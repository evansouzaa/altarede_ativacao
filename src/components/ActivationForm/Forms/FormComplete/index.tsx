import { FormButtonNav } from "../";
import { useFormData } from "../../../../context/formContext";
import { formStepsActivation } from "../../../../config/steps";
import { FormStyled } from "../styles";
import { Button } from "react-bootstrap";
import { sendDataDb } from "../../../../hooks";
import { FormStepButtonsTypes } from "../../../../types"
import { formatWppMessage } from "../../../../utils";
import Loading from "../../../Loading";
import { useState } from "react";

export const FormCompleted = ({ prevFormStep, currentStep }: FormStepButtonsTypes) => {

  const { data } = useFormData()

  const [LoadingStatus, setLoadinStatus] = useState(true)

  const handleButton = () => {
    //enable loading
    setLoadinStatus(false)

    sendDataDb(data).then(function (response) {
      if (response.error) {
        setLoadinStatus(true)
        alert("Erro! Tente novamente ou atualize a pagina!")
      }
      //format whatsapp message
      const wppMessage = formatWppMessage(data)
      window.location.href = `https://wa.me/?text=${encodeURIComponent(wppMessage)}`;
    })
  }

  return (
    <FormStyled style={currentStep == formStepsActivation.steps - 1 ? {} : { display: 'none' }}>
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