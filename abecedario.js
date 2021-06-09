function solucao(letra, palavras) {
    
	let n = 0;

    for (let item of palavras) {
        if(item[0] !== letra) {
        n++;
    }
}

console.log(n);
    
}