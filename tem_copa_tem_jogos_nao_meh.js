function solucao(ano) {
	if (ano > 2021) {
        let copa = ano;
        while (copa > 2014){
            copa -= 4;
        }
        let jogos = ano;
        while (jogos > 2016){
            jogos -= 4;
        }
        if (copa === 2014) {
            console.log("COPA");
        } else if (jogos === 2016) {
            console.log("JOGOS");
        } else if (copa != 2014 && jogos != 2016) {
            console.log("MEH");
        }
    }
}