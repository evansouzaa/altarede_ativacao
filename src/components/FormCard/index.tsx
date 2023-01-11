import { ReactNode, useState } from "react";
import FormProvider from "../../context/formContext";
import { FormClient, FormDocNetwork, FormInventoryNetwork, FormCompleted, FormMaterialUsed, FormClientConfig } from '../Forms';
import { FormCardContainer } from "./styles";

type Props = {
  children?: ReactNode
  nStep: number,
  startStep: number
}

export default function FormCard({ children, nStep, startStep }: Props) {
  const [formStep, setFormStep] = useState(startStep);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <FormProvider>
      <FormCardContainer>
        <h5>Ativação do ONU Altarede</h5>
        <span>Passo {formStep + 1} de {nStep}</span>

        {children}

        <FormClient
          prevFormStep={prevFormStep}
          currentStep={formStep}
          nextFormStep={nextFormStep}
        />
        <FormDocNetwork
          prevFormStep={prevFormStep}
          currentStep={formStep}
          nextFormStep={nextFormStep}
        />
        <FormInventoryNetwork
          prevFormStep={prevFormStep}
          currentStep={formStep}
          nextFormStep={nextFormStep}
        />
        <FormCompleted
          prevFormStep={prevFormStep}
          currentStep={formStep}
        />
        <FormMaterialUsed
          prevFormStep={prevFormStep}
          currentStep={formStep}
          nextFormStep={nextFormStep}
        />
        <FormClientConfig
          prevFormStep={prevFormStep}
          currentStep={formStep}
          nextFormStep={nextFormStep}
        />
      </FormCardContainer>
    </FormProvider>
  );
}
