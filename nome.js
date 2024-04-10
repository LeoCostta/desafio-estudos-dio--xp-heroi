// Criação da variável
let nome = "Leandro";

// Função para gerar XP aleatório 
function gerarXP(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para determinar o nível com base na XP
function determinarNivel(XP) {
    if (XP < 1000) {
        return "Ferro";
    } else if (XP <= 2000) {
        return "Bronze";
    } else if (XP <= 5000) {
        return "Prata";
    } else if (XP <= 7000) {
        return "Ouro";
    } else if (XP <= 8000) {
        return "Platina";
    } else if (XP <= 9000) {
        return "Ascendente";
    } else if (XP <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Gerar XP aleatório 
const minXP = 1;
const maxXP = 250000;
let XP = gerarXP(minXP, maxXP);

// Determinar o nível
let nivel = determinarNivel(XP);

// Saída
console.log(`O Herói de nome ${nome} está no nível ${nivel} com XP de ${XP}`);
