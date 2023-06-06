import { calcGeolocationDistance } from "../utils"

export function getPosition(options?: PositionOptions): Promise<any> {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
}

export const formConfig = {
    planos: [
        { nome: "SOCIAL 60MB", qtd_roteador: 0, ont_wifi: false, roteador_wifi: false },
        { nome: "FIBER 350MB", qtd_roteador: 0, ont_wifi: false, roteador_wifi: false },
        { nome: "FIBER+ 500MB WIFI 5", qtd_roteador: 1, ont_wifi: false, roteador_wifi: true },
        { nome: "FIBER+ 500MB WIFI 5 (ONT WIFI)", qtd_roteador: 0, ont_wifi: true, roteador_wifi: false },
        { nome: "HOME OFFICE 600MB WIFI 5 MESH", qtd_roteador: 2, ont_wifi: false, roteador_wifi: true },
        { nome: "SEM LIMITES 1GB WIFI 6E", qtd_roteador: 1, ont_wifi: true, roteador_wifi: true },
        { nome: "SEM LIMITES 1GB WIFI 6E (ONT WIFI)", qtd_roteador: 0, ont_wifi: true, roteador_wifi: false },
        { nome: "WIFI NA CASA TODA 1GB WIFI 5 MESH 360", qtd_roteador: 3, ont_wifi: false, roteador_wifi: true },
        { nome: "CASA INTELIGENTE 1GB WIFI 6E MESH 360", qtd_roteador: 3, ont_wifi: false, roteador_wifi: true }
    ],
    modelo_ont: [
        { modelo: "HG8010H" },
        { modelo: "HG8310M" },
        { modelo: "EG8010H" },
        { modelo: "EG8145V5-V2" },
        { modelo: "HG8045H" },
        { modelo: "HG8245Q2" },
        { modelo: "EG8145X6" }
    ],
    modelo_roteador: ["WS5200", "AX2", "AX3"],
    estacao: Array<string>(),
    login_prefix: Array<string>(),
    area: [...Array.from({ length: 128 }, (_, i) => `A${i + 1}`)],
    cto: [...Array.from({ length: 16 }, (_, i) => i + 1)],
    porta: [...Array.from({ length: 16 }, (_, i) => i + 1)],
    estacaoMaxDistance: 13, //max distance station to show options
}

export const estacoesConfig = [
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
        name: "TRL-EST1",
        lat: -22.413391963354428,
        long: -42.96794951278071
    },
    {
        name: "NOF-EST1",
        lat: -22.2907465535661,
        long: -42.531648876727196
    }
]

//get position and calculate distance to stations
getPosition()
    .then((position) => {
        //calc distance station
        const distances = calcGeolocationDistance(position.coords.latitude, position.coords.longitude)

        if (distances.length == 0) {
            alert("Fora da área de cobertura... ")
            alert("Verifique sua localização!")

            //set station
            formConfig.estacao = ["ESTAÇÃO INDISPONÍVEL..."]
            localStorage.setItem('estacao', JSON.stringify(formConfig.estacao))

            //set login_prefix
            formConfig.login_prefix = [""]
            localStorage.setItem('login_prefix', JSON.stringify(formConfig.login_prefix))
        } else {
            //set station
            formConfig.estacao = distances.map(element => element.name)
            localStorage.setItem('estacao', JSON.stringify(formConfig.estacao))
            
            //set login_prefix
            formConfig.login_prefix = distances.map(element => element.name)
            localStorage.setItem('login_prefix', JSON.stringify(formConfig.login_prefix))
        }


    })
    .catch((err) => {
        console.error(err.message);
    });
