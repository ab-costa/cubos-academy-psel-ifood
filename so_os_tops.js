function solucao(produtos) {
	let top = 0;
    let total = 0;

    for (let item of produtos) {
        if (item.preco >= 10000) {
            top += item.preco;
        }
        total += item.preco;
    }
//console.log(top);
//console.log(total);
let resposta = {
  totalTop: top,
  percentual: top / total 
}
console.log(resposta)
    
}