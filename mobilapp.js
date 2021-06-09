function solucao(tempo, distancia) {

	if (tempo < 5) {
        let viagem = 6*100;
        console.log(viagem);
    } else if (tempo <= 60 && tempo >= 5) {
        viagem = (tempo * 100) + (distancia * 50);
        console.log(viagem);
    } else if (tempo > 60) {
        if (distancia < 100) {
            viagem = distancia * 200;
            console.log(viagem);
        } else {
            viagem = distancia * 150;
            console.log(viagem);
        }
    }
}
