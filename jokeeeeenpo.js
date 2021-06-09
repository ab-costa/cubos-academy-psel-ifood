function solucao(joao, andre) {
    
    if ((joao === "PEDRA") && ((andre != "PAPEL") && (andre != joao))) {
        console.log("JOAO");
    } else if ((joao === "PAPEL") && ((andre != "TESOURA") && (andre != joao))) {
        console.log("JOAO");
    } else if ((joao === "TESOURA") && ((andre != "PEDRA") && (andre != joao))) {
        console.log("JOAO");
    } else if ((andre === "PEDRA") && ((joao != "PAPEL") && (andre != joao))) {
        console.log("ANDRE");
    } else if ((andre === "PAPEL") && ((joao != "TESOURA") && (andre != joao))) {
        console.log("ANDRE");
    } else if ((andre === "TESOURA") && ((joao != "PEDRA") && (andre != joao))) {
        console.log("ANDRE");
    } else {
        console.log("EMPATE");
    }

}