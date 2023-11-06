import { useState } from "react";
import FormProvider from "../../../context/formContext";
import { FormClient, FormInventoryNetwork, FormCompleted, FormMaterialUsed, FormClientConfig, FormLocation } from '../Forms';
import { FormCardContainer } from "./styles";

import { FormCardTypes } from "../../../types";

export function FormCard({ children, nStep, startStep }: FormCardTypes) {
  const [formStep, setFormStep] = useState(startStep);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <FormProvider>
      <FormCardContainer>
        <h5>Troca ONT Altarede</h5>
        <span>Passo {formStep + 1} de {nStep}</span>

        {children}

        <FormClient
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={0}
        />
        <FormInventoryNetwork
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={1}
        />
        <FormMaterialUsed
          prevFormStep={prevFormStep}
          nextFormStep={nextFormStep}
          currentStep={formStep}
          orderStep={2}
        />
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
