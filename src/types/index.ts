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
  prevFormStep: () => void,
  buttonDisable?: boolean
}

//type form context
export type ChildrenPropsType = {
  children: ReactNode
}

export type FormValuesType = {
  values: {
    client: {
      nome: string,
      login: string,
      plano: string,
    },
    network_doc: {
      estacao: string,
      area: string,
      cto: number,
      porta: number,
      potencia_cto: number
    },
    network_actives: {
      modelo_ont: string,
      serial_ont: string,
      modelo_roteador: string,
      serial_roteador_1: string,
      serial_roteador_2: string,
      serial_roteador_3: string
    },
    material_used: {
      fibra: number,
      alca: number,
      nylon: number,
      pto: number,
      cabo_utp: number,
      fixa_fio: number,
      conector_rj45: number,
      conector_apc: number,
      conector_upc: number,
      cordao_apc_apc: number,
      cordao_apc_upc: number
    },
    client_config: {
      client_ssid: string,
      client_pass: string,
      client_ipv6: boolean,
      roteador_preset: boolean,
      desmembrar_wifi5: boolean,
      tecnicos: string,
      obs: string
    },
    position: {
      lat: number,
      lng: number,
    }
  }
  setFormValues: () => void
}