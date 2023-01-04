import { ReactNode } from "react";

type Props = {
  children: ReactNode,
  currentStep: number,
  nextFormStep: () => void,
  prevFormStep: () => void
}

export default function FormCard({ children, currentStep, nextFormStep, prevFormStep }: Props) {

  return (
    <div>
      <span>Step {currentStep + 1} of 3</span>

      {children}

      <hr />
    </div>
  );
}
