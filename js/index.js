function calcular () {  
    
    var peso = 0
    var contador;
    
    while (confirm('Deseja incluir mais um peso? ') === true) {
        peso += peso; 

        var mediaPeso = parseFloat(peso / contador);
        var proximaMeta = parseFloat(mediaPeso * 0.995);

        exibirMedia.innerHTML = (`
            Sua média desse mês é: ${mediaPeso.toFixed(2)} 
        `);

        exibirMeta.innerHTML = (`
            Sua meta para esse mês é: ${proximaMeta.toFixed(2)} 
        `);

    }
}
