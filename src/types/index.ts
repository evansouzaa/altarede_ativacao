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


export type LoginValuesType = {
  name: string,
  email: string,
  password: string
}


export type FormValuesType = {
    client?: {
      nome: string,
      login: string | null,
      plano: string,
    },
    network_doc?: {
      estacao: string,
      area: string,
      cto: number,
      porta: number,
      potencia_cto: number
    },
    network_actives?: {
      modelo_ont: string,
      serial_ont: string,
      modelo_roteador: string,
      serial_roteador_1: string,
      serial_roteador_2: string,
      serial_roteador_3: string
    },
    material_used?: {
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
    client_config?: {
      client_ssid: string,
      client_pass: string,
      client_ipv6: boolean,
      roteador_preset: boolean,
      desmembrar_wifi5: boolean,
      tecnicos: string,
      obs: string,
      mudanca_endereco: boolean,
      mudanca_plano: boolean
    },
    position?: {
      lat: number,
      lng: number,
    }
}

export type MessageWppTypes = {
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
    material_usedz: {
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
      wifi5_channel: number
      wifi4_channel: number
      mudanca_plano: number
      client_ssid: string,
      client_pass: string,
      client_ipv6: boolean,
      roteador_preset: boolean,
      desmembrar_wifi5: boolean,
      tecnicos: string,
      obs: string,
      mudanca_endereco: boolean,
      contrato: boolean
    },
    position?: {
      lat: number,
      lng: number,
    }
}