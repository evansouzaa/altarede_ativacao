export type FormStepTypes = {
  currentStep: number,
  orderStep?: number,
  nextFormStep: () => void,
  prevFormStep: () => void
}