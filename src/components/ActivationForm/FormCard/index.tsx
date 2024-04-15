import { useState } from "react";
import FormProvider from "../../../context/formContext";
import { FormClient, FormDocNetwork, FormInventoryNetwork, FormCompleted, FormClientConfig, FormLocation } from '../Forms';
import { FormCardContainer } from "./styles";

import { FormCardTypes } from "../../../types";

export function FormCard({ children, nStep, startStep }: FormCardTypes) {
  const [formStep, setFormStep] = useState(startStep);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <FormProvider>
      <FormCardContainer>
        <h5>Ativação de ONT Altarede</h5>
        <span>Passo {formStep + 1} de {nStep}</span>

        {children}

        <FormClient
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={0}
        />
        <FormDocNetwork
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={1}
        />
        <FormInventoryNetwork
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={2}
        />
        {/* <FormMaterialUsed
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={3}
        /> */}
        <FormClientConfig
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={3}
        />
        <FormLocation
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={4}
        ></FormLocation>
        <FormCompleted
          prevFormStep={prevFormStep}
          currentStep={formStep}
        />
      </FormCardContainer>
    </FormProvider>
  );
}
