let herois = [
    { nome: "Laryssa", xp: 7500 },
    { nome: "Carlos", xp: 2500 },
    { nome: "Mariana", xp: 9500 },
    { nome: "Pedro", xp: 12000 }
];

for (let heroi of herois) {
    let nivel = "";

    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
}
