import { calcGeolocationDistance } from "../utils"

export const formConfig = {
    planos: [
        { nome: "SOCIAL 60MB", qtd_roteador: 0, ont_wifi: false },
        { nome: "FIBER 350MB", qtd_roteador: 0, ont_wifi: false },
        { nome: "FIBER+ 500MB WIFI 5", qtd_roteador: 1, ont_wifi: false },
        { nome: "FIBER+ 500MB WIFI 5 (ONT WIFI)", qtd_roteador: 0, ont_wifi: true },
        { nome: "500 MEGA SUPER WIFI 5 X2", qtd_roteador: 2, ont_wifi: false },
        { nome: "HOME OFFICE 600MB WIFI 5 MESH", qtd_roteador: 2, ont_wifi: false },
        { nome: "SEM LIMITES 1GB WIFI 6E", qtd_roteador: 1, ont_wifi: false },
        { nome: "SEM LIMITES 1GB WIFI 6E (ONT WIFI)", qtd_roteador: 0, ont_wifi: true },
        { nome: "WIFI NA CASA TODA 1GB WIFI 5 MESH 360", qtd_roteador: 3, ont_wifi: false },
        { nome: "CASA INTELIGENTE 1GB WIFI 6E MESH 360", qtd_roteador: 3, ont_wifi: false }
    ],
    modelo_ont: [
        { modelo: "HG8010H", sn_prefix: "48575443", ont_wifi: false },
        { modelo: "HG8310M", sn_prefix: "48575443", ont_wifi: false },
        { modelo: "EG8010H", sn_prefix: "48575443", ont_wifi: false },
        { modelo: "DM985-100", sn_prefix: "4441434D", ont_wifi: false },
        { modelo: "XZ000-G7", sn_prefix: "54504C47", ont_wifi: false },
        { modelo: "EG8145V5-V2", sn_prefix: "48575443", ont_wifi: true },
        { modelo: "XC220-G3", sn_prefix: "54504C47", ont_wifi: true },
        { modelo: "HG8045H", sn_prefix: "48575443", ont_wifi: true },
        { modelo: "HG8245Q2", sn_prefix: "48575443", ont_wifi: true },
        { modelo: "EG8145X6", sn_prefix: "48575443", ont_wifi: true }
    ],
    modelo_roteador: ["WS5200", "AX2", "AX3"],
    estacao: Array<string>(),
    login_prefix: Array<string>(),
    area: [...Array.from({ length: 128 }, (_, i) => `A${i + 1}`)],
    cto: [...Array.from({ length: 24 }, (_, i) => i + 1)],
    porta: [...Array.from({ length: 16 }, (_, i) => i + 1)],
    estacaoMaxDistance: 13, //max distance station to show options
}

export const estacoesConfig = [
    //PTS
    {
        name: "PTS-EST1",
        lat: -22.516754748275332,
        long: -43.169708099084836,
    },
    {
        name: "PTS-EST2",
        lat: -22.507652093179875,
        long: -43.191719245814944
    },
    {
        name: "PTS-EST3",
        lat: -22.392055949152912,
        long: -43.13089733638718
    },
    {
        name: "PTS-EST4",
        lat: -22.491651844723698,
        long: -43.15768843107088
    },
    //TRL
    {
        name: "TRL-EST1",
        lat: -22.413391963354428,
        long: -42.96794951278071
    },
    //NOF
    {
        name: "NOF-EST1",
        lat: -22.28924284481623,
        long: -42.531841993331916
    },
    {
        name: "NOF-EST2",
        lat: -22.244426823468682,
        long: -42.53963246941567
    },
    {
        name: "NOF-EST3",
        lat: -22.26366682997473,
        long: -42.62185424566269
    },
    {
        name: "NOF-EST4",
        lat: -22.324550425659,
        long: -42.6707750056939
    },
    {
        name: "NOF-EST5",
        lat: -22.25969606879603,
        long: -42.45811208525503
    },
    {
        name: "NOF-EST6",
        lat: -22.310988457388227,
        long: -42.53737850535584
    },
    //BJR
    {
        name: "BJR-EST1",
        lat: -22.15072859448656,
        long: -42.419993877410896
    },
    {
        name: "BJR-EST2",
        lat: -22.19111433872571,
        long: -42.404015646568205
    },
    {
        name: "BJR-EST3",
        lat: -22.076522760212303,
        long: -42.40596457284517
    },
    {
        name: "BJR-EST4",
        lat: -22.24481424904232,
        long: -42.31626687263469
    },
    {
        name: "BJR-EST5",
        lat: -22.177174665844902,
        long: -42.47339007256455
    },
    //RIOS
    {
        name: "RIOS-EST1",
        lat: -22.552408731355296,
        long: -41.97617587040787
    },
    {
        name: "RIOS-EST2",
        lat: -22.514081001893402,
        long: -41.92893645978065
    }

]

export function getPosition(): Promise<any> {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true })
    );
}

//get position and calculate distance to stations
getPosition().then((position) => {
    //calc distance station

    //const distances = calcGeolocationDistance(-22.517033371269164, -41.92475390556813)
    const distances = calcGeolocationDistance(position.coords.latitude, position.coords.longitude)

    if (distances.length == 0) {

        alert("Fora da área de cobertura... ")
        alert("Verifique sua localização!")

        //set station false
        formConfig.estacao = ["ESTAÇÃO INDISPONÍVEL..."]
        localStorage.setItem('estacao', JSON.stringify(formConfig.estacao))

        //set login_prefix false
        formConfig.login_prefix = ["ERROR"]
        localStorage.setItem('login_prefix', JSON.stringify(formConfig.login_prefix))

    } else {

        const newDistanceSort = distances.sort((a, b) => a.distance - b.distance);

        formConfig.estacao = newDistanceSort.map(element => element.name)

        localStorage.setItem('estacao', JSON.stringify(formConfig.estacao))

        //set login_prefix
        formConfig.login_prefix = distances.map(element => element.name.split("-")[0])
        localStorage.setItem('login_prefix', JSON.stringify(formConfig.login_prefix))

    }
})
    .catch((err) => {
        alert("É necessário permitir a localização!")
        getPosition()

        //set station false
        formConfig.estacao = ["ESTAÇÃO INDISPONÍVEL..."]
        localStorage.setItem('estacao', JSON.stringify(formConfig.estacao))

        //set login_prefix false
        formConfig.login_prefix = ["ERROR"]
        localStorage.setItem('login_prefix', JSON.stringify(formConfig.login_prefix))
        console.error(err.message);
    });
