export const formConfig = {
    planos: [
        { nome: "SOCIAL 60MB", qtd_roteador: 0, ont_wifi: false, roteador_wifi: false },
        { nome: "FIBER 350MB", qtd_roteador: 0, ont_wifi: false, roteador_wifi: false },
        { nome: "FIBER+ 500MB WIFI 5", qtd_roteador: 1, ont_wifi: false, roteador_wifi: true},
        { nome: "FIBER+ 500MB WIFI 5 (ONT WIFI)", qtd_roteador: 0, ont_wifi: true, roteador_wifi: false},
        { nome: "HOME OFFICE 600MB WIFI 5 MESH", qtd_roteador: 2, ont_wifi: false, roteador_wifi: true},
        { nome: "SEM LIMITES 1GB WIFI 6E", qtd_roteador: 1, ont_wifi: true, roteador_wifi: true},
        { nome: "SEM LIMITES 1GB WIFI 6E (ONT WIFI)", qtd_roteador: 0, ont_wifi: true, roteador_wifi: false},
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
    estacao: ["PTS-EST1", "PTS-EST2", "PTS-EST3"],
    area: [...Array.from({ length: 128 }, (_, i) => `A${i + 1}`)],
    cto: [...Array.from({ length: 16 }, (_, i) => i + 1)],
    porta: [...Array.from({ length: 16 }, (_, i) => i + 1)],
}