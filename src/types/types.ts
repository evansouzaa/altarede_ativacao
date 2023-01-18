import { ReactNode } from "react"

export type FormStepTypes = {
  currentStep: number,
  orderStep?: number,
  nextFormStep: () => void,
  prevFormStep: () => void
}

export type FormCardTypes = {
  children?: ReactNode
  nStep: number,
  startStep: number,
}

export type FormStepButtonsTypes = {
  currentStep: number,
  prevFormStep: () => void
}