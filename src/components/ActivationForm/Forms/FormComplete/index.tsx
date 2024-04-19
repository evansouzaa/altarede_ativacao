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
import { toast } from "react-toastify";

export const FormCompleted = ({ prevFormStep, currentStep }: FormStepButtonsTypes) => {

  const { data, setFormValues } = useFormData()

  const [LoadingStatus, setLoadinStatus] = useState(true)

  const handleButton = () => {

    setLoadinStatus(false)

    setFormValues(data)

    sendDataDb(data)
      .then(function (response) {
        if (response.error == false) {
          //format whatsapp message
          const wppMessage = formatWppMessage(data)
          setLoadinStatus(true)
          window.location.href = `https://wa.me/?text=${encodeURIComponent(wppMessage)}`;
          return
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      }).catch((e) => {
        setLoadinStatus(true)
        toast.error("Algo deu errado")
        toast.warning("Verifique sua conexão")
        //setTimeout(() => window.location.reload(), 4000)
        return
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
      <div className="col d-flex flex-column align-items-center p-2">
        <div>
          <p className="text-danger font-italic"><b>*Imprescindível baixar o contrato após a instalação!</b></p>
        </div>
        <Button
          variant="danger"
          onClick={handleButton}
          className="btn-send-active mt-2" // Adiciona uma margem superior para separar o botão do switch
          size="sm"
        >
          Solicitar Ativação
        </Button>
      </div>

      <FormButtonNav currentStep={currentStep} prevFormStep={prevFormStep} />
      <Loading status={LoadingStatus}></Loading>
    </FormStyled>
  )
}