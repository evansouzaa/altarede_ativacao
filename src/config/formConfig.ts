export const formConfig = {
    planos: [
        { nome: "SOCIAL 60MB", qtd_roteador: 0 },
        { nome: "WIFI - 1GB", qtd_roteador: 1 },
        { nome: "WIFI - CASA TODA", qtd_roteador: 3 }
    ],
    modelo_ont: ["HG8010H", "HG8310M", "EG8010H", "EG8145V", "HG8045H", "HG8245Q2", "HS8546V5"],
    modelo_roteador: ["WS5200", "AX2"],
    estacao: ["PTS-EST1", "PTS-EST2", "PTS-EST3"],
    area: [...Array.from({ length: 128 }, (_, i) => `A${i + 1}`)],
    cto: [...Array.from({ length: 16 }, (_, i) => i + 1)],
    porta: [...Array.from({ length: 16 }, (_, i) => i + 1)],
}