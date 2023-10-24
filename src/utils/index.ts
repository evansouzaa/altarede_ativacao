import { estacoesConfig, formConfig } from "../config/config"
import { MessageWppTypes } from "../types"

export const formatWppMessage = (data: MessageWppTypes) => {

    const {
        client,
        network_doc,
        network_actives,
        material_used,
        client_config,
        position
    } = data

    const messageList = []

    messageList.push(`⚠ Ativação Ont ⚠`)
    client_config.mudanca_endereco && messageList.push(`⛔ Mudança endereço ⛔`)

    messageList.push(`=== Informações do Cliente ===`)
    client.nome && messageList.push(`*Nome:* ${client.nome}`)
    client.login && messageList.push(`*Login:* ${client.login}`)
    client.plano && messageList.push(`*Plano:* ${client.plano}`)

    messageList.push(`=== Documentação de Rede ===`)
    network_doc.estacao && messageList.push(`*Estação:* ${network_doc.estacao}`)
    network_doc.area && messageList.push(`*Área:* ${network_doc.area}`)
    network_doc.cto && messageList.push(`*CTO:* ${network_doc.cto}`)
    network_doc.porta && messageList.push(`*Porta:* ${network_doc.porta}`)
    network_doc.potencia_cto && messageList.push(`*Potência Cto:* ${network_doc.potencia_cto}`)

    messageList.push(`=== Ativos de Rede ===`)
    network_actives.modelo_ont && messageList.push(`*Modelo Ont:* ${network_actives.modelo_ont}`)
    network_actives.serial_ont && messageList.push(`*Serial Ont:* ${network_actives.serial_ont}`)
    network_actives.modelo_roteador ? messageList.push(`*Modelo Roteador:* ${network_actives.modelo_roteador}`) : "não foi"
    network_actives.serial_roteador_1 ? messageList.push(`*Serial Roteador 1:* ${network_actives.serial_roteador_1}`) : ""
    network_actives.serial_roteador_2 ? messageList.push(`*Serial Roteador 2:* ${network_actives.serial_roteador_2}`) : ""
    network_actives.serial_roteador_3 ? messageList.push(`*Serial Roteador 3:* ${network_actives.serial_roteador_3}`) : ""

    messageList.push(`=== Material Utilizado ===`)
    material_used.fibra ? messageList.push(`*Fibra:* ${material_used.fibra}`) : ""
    material_used.alca ? messageList.push(`*Alça:* ${material_used.alca}`) : ""
    material_used.nylon ? messageList.push(`*Nylon:* ${material_used.nylon}`) : ""
    material_used.pto ? messageList.push(`*Pto:* ${material_used.pto}`) : ""
    material_used.cabo_utp ? messageList.push(`*Cabo Utp:* ${material_used.cabo_utp}`) : ""
    material_used.fixa_fio ? messageList.push(`*Fixa Fio:* ${material_used.fixa_fio}`) : ""
    material_used.conector_rj45 ? messageList.push(`*Conec. RJ45:* ${material_used.conector_rj45}`) : ""
    material_used.conector_apc ? messageList.push(`*Conec. APC:* ${material_used.conector_apc}`) : ""
    material_used.conector_upc ? messageList.push(`*Conec. UPC:* ${material_used.conector_upc}`) : ""
    material_used.cordao_apc_apc ? messageList.push(`*Cord. APC/APC:* ${material_used.cordao_apc_apc}`) : ""
    material_used.cordao_apc_upc ? messageList.push(`*Cord. APC/UPC:* ${material_used.cordao_apc_upc}`) : ""

    messageList.push(`=== Configurações do Cliente ===`)
    client_config.client_ssid && messageList.push(`*SSiD:* ${client_config.client_ssid}`)
    client_config.client_pass && messageList.push(`*Senha:* ${client_config.client_pass}`)
    client_config.client_ipv6 && messageList.push(`*Ipv6:* Sim`)
    client_config.roteador_preset && messageList.push(`*Roteador Preset:* Sim`)
    client_config.desmembrar_wifi5 && messageList.push(`*Desmembrar Wifi 5:* Sim`)
    client_config.obs && messageList.push(`*Observações:* ${client_config.obs}`)
    client_config.tecnicos && messageList.push(`*Técnicos:* ${client_config.tecnicos}`)

    messageList.push(`=== Localização ===`)
    position && messageList.push(`*Lat, Lng:* ${position.lat + ", " + position.lng}`)

    let messageComplete = ""
    messageList.forEach((item) => {
        messageComplete += item + "\n"
    })
    return messageComplete
}

export const calcGeolocationDistance = (myLat: number, myLong: number) => {
    const latlongEstacoes = estacoesConfig

    function deg2rad(deg: any) {
        return deg * (Math.PI / 180)
    }

    function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);  // deg2rad below
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }

    const distanceEst = []

    for (let index = 0; index < latlongEstacoes.length; index++) {
        const element = latlongEstacoes[index];
        const result = getDistanceFromLatLonInKm(myLat, myLong, element.lat, element.long)
        distanceEst.push({ name: element.name, distance: result })
    }

    const distances = distanceEst.filter(element => element.distance <= formConfig.estacaoMaxDistance)
    return distances
}