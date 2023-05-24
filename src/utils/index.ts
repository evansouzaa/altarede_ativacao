import { estacoesConfig, formConfig } from "../config/config"

export const formatWppMessage = (data: any) => {
    const messageList = []

    messageList.push(`⚠ Ativação Ont ⚠`)

    messageList.push(`=== Informações do Cliente ===`)
    data.client.nome && messageList.push(`*Nome:* ${data.client.nome}`)
    data.client.login && messageList.push(`*Login:* ${data.client.login}`)
    data.client.plano && messageList.push(`*Plano:* ${data.client.plano}`)

    messageList.push(`=== Documentação de Rede ===`)
    data.network_doc.estacao && messageList.push(`*Estação:* ${data.network_doc.estacao}`)
    data.network_doc.area && messageList.push(`*Área:* ${data.network_doc.area}`)
    data.network_doc.cto && messageList.push(`*CTO:* ${data.network_doc.cto}`)
    data.network_doc.porta && messageList.push(`*Porta:* ${data.network_doc.porta}`)
    data.network_doc.potencia_cto && messageList.push(`*Potência Cto:* ${data.network_doc.potencia_cto}`)

    messageList.push(`=== Ativos de Rede ===`)
    data.network_actives.modelo_ont && messageList.push(`*Modelo Ont:* ${data.network_actives.modelo_ont}`)
    data.network_actives.serial_ont && messageList.push(`*Serial Ont:* ${data.network_actives.serial_ont}`)
    data.network_actives.modelo_roteador ? messageList.push(`*Modelo Roteador:* ${data.network_actives.modelo_roteador}`) : "não foi"
    data.network_actives.serial_roteador_1 ? messageList.push(`*Serial Roteador 1:* ${data.network_actives.serial_roteador_1}`) : ""
    data.network_actives.serial_roteador_2 ? messageList.push(`*Serial Roteador 2:* ${data.network_actives.serial_roteador_2}`) : ""
    data.network_actives.serial_roteador_3 ? messageList.push(`*Serial Roteador 3:* ${data.network_actives.serial_roteador_3}`) : ""

    messageList.push(`=== Material Utilizado ===`)
    data.material_used.fibra ? messageList.push(`*Fibra:* ${data.material_used.fibra}`) : ""
    data.material_used.alca ? messageList.push(`*Alça:* ${data.material_used.alca}`) : ""
    data.material_used.nylon ? messageList.push(`*Nylon:* ${data.material_used.nylon}`) : ""
    data.material_used.pto ? messageList.push(`*Pto:* ${data.material_used.pto}`) : ""
    data.material_used.cabo_utp ? messageList.push(`*Cabo Utp:* ${data.material_used.cabo_utp}`) : ""
    data.material_used.fixa_fio ? messageList.push(`*Fixa Fio:* ${data.material_used.fixa_fio}`) : ""
    data.material_used.conector_rj45 ? messageList.push(`*Conec. RJ45:* ${data.material_used.conector_rj45}`) : ""
    data.material_used.conector_apc ? messageList.push(`*Conec. APC:* ${data.material_used.conector_apc}`) : ""
    data.material_used.conector_upc ? messageList.push(`*Conec. UPC:* ${data.material_used.conector_upc}`) : ""
    data.material_used.cordao_apc_apc ? messageList.push(`*Cord. APC/APC:* ${data.material_used.cordao_apc_apc}`) : ""
    data.material_used.cordao_apc_upc ? messageList.push(`*Cord. APC/UPC:* ${data.material_used.cordao_apc_upc}`) : ""

    messageList.push(`=== Configurações do Cliente ===`)
    data.client_config.client_ssid && messageList.push(`*SSiD:* ${data.client_config.client_ssid}`)
    data.client_config.client_pass && messageList.push(`*Senha:* ${data.client_config.client_pass}`)
    data.client_config.client_ipv6 && messageList.push(`*Ipv6:* Sim`)
    data.client_config.roteador_preset && messageList.push(`*Roteador Preset:* Sim`)
    data.client_config.desmembrar_wifi5 && messageList.push(`*Desmembrar Wifi 5:* Sim`)
    data.client_config.obs && messageList.push(`*Observações:* ${data.client_config.obs}`)
    data.client_config.tecnicos && messageList.push(`*Técnicos:* ${data.client_config.tecnicos}`)

    messageList.push(`=== Localização ===`)
    data.position && messageList.push(`*Lat, Lng:* ${data.position.lat + ", " + data.position.lng}`)

    let messageComplete = ""
    messageList.forEach((item) => {
        messageComplete += item + "\n"
    })
    return messageComplete
}

export const calcGeolocationDistance = (myLat: number, myLong: number) => {
    const latlongEstacoes = estacoesConfig

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

    function deg2rad(deg: any) {
        return deg * (Math.PI / 180)
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