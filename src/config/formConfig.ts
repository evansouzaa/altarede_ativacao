export const formConfig = {
    plano: ["SOCIAL 60MB","WIFI - 1GB", "WIFI - CASA TODA" ],
    modelo_ont : ["HG8010H", "HG8310M", "EG8010H", "EG8145V", "HG8045H", "HG8245Q2", "HS8546V5" ],
    modelo_roteador : ["WS5200", "AX2"],
    estacao: ["PTS-EST1", "PTS-EST2", "PTS-EST3"],
    area: [...Array.from({length: 128}, (_, i) => `A${i + 1}`)],
    cto: [...Array.from({length: 16}, (_, i) => i + 1)],
    porta: [...Array.from({length: 16}, (_, i) => i + 1)],
}