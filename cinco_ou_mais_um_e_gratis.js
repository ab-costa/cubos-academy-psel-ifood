function solucao(precos) {

    let menor = precos[0];
    let contador = 0;
    let total = 0;

    for (let i = 0; i < precos.length; i++) {
        if(precos[i] <= menor) {
            menor = precos[i];
        }
        contador++;
        total += precos[i];
    }
}