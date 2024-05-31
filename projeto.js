let nomeHeroiePontosXP =[
    ["Christopher", 7000]
]
let nivelHeroi = ""

if (nomeHeroiePontosXP[0][1] <= 1000 ){ 
    nivelHeroi="Ferro"
}else if (nomeHeroiePontosXP[0][1] <= 2000 ){
    nivelHeroi="Broze"
}else if (nomeHeroiePontosXP[0][1] <= 5000 ){
    nivelHeroi="Prata"
}else if (nomeHeroiePontosXP[0][1] <= 7000 ){
    nivelHeroi="Ouro"
}else if (nomeHeroiePontosXP [0][1] <= 8000){
    nivelHeroi="Platina"
}else if (nomeHeroiePontosXP [0][1] <= 9000){
    nivelHeroi="Ascendente"
}else if (nomeHeroiePontosXP[0][1] <= 10000){
    nivelHeroi="Imortal"
}else {
    nivelHeroi="Radiante"
}


console.log("O Herói de nome " + nomeHeroiePontosXP[0][0] + " está no nível " + nivelHeroi )