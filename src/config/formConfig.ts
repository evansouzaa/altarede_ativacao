export const formConfig = {
    planos: [
        { nome: "SOCIAL 60MB", qtd_roteador: 0, ont_wifi: false },
        { nome: "WIFI - 500MB (ROTEADOR)", qtd_roteador: 1, ont_wifi: false},
        { nome: "WIFI - 500MB (ONT WIFI)", qtd_roteador: 0, ont_wifi: true},
        { nome: "WIFI - 1GB (ROTEADOR)", qtd_roteador: 1, ont_wifi: false},
        { nome: "WIFI - 1GB (ONT WIFI)", qtd_roteador: 0, ont_wifi: true},
        { nome: "WIFI - CASA TODA 1GB", qtd_roteador: 3, ont_wifi: false },
        { nome: "WIFI - CASA INTELIGENTE 1GB", qtd_roteador: 3, ont_wifi: false }
    ],
    modelo_ont: [
        { modelo: "HG8010H" },
        { modelo: "HG8310M" },
        { modelo: "EG8010H" },
        { modelo: "EG8145V5-V2" },
        { modelo: "HG8045H" },
        { modelo: "HG8245Q2" }
    ],
    modelo_roteador: ["WS5200", "AX2", "AX3"],
    estacao: ["PTS-EST1", "PTS-EST2", "PTS-EST3"],
    area: [...Array.from({ length: 128 }, (_, i) => `A${i + 1}`)],
    cto: [...Array.from({ length: 16 }, (_, i) => i + 1)],
    porta: [...Array.from({ length: 16 }, (_, i) => i + 1)],
}