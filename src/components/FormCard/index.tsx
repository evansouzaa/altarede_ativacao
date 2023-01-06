import { ReactNode, useState } from "react";
import FormProvider from "../../context/formContext";
import { FormClient, FormDocNetwork, FormInventoryNetwork } from '../Forms';
import { FormCompleted } from "../Forms/FormComplete";

type Props = {
  children?: ReactNode
  nStep: number
}

export default function FormCard({ children, nStep }: Props) {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <FormProvider>
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
      </FormProvider>
    </div>
  );
}
