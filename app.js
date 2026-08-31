const campoQuantidade = document.getElementById('quantidade');
    const campoInicio = document.getElementById('de');
    const campoFim = document.getElementById('ate');
 
    const quantidadeTexto = campoQuantidade.value;
    const inicioTexto = campoInicio.value;
    const fimTexto = campoFim.value;
 
    if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
        alert('Preencha todos os campos.');
        return;
    }
 
    const quantidade = Number(quantidadeTexto);
    const inicio = Number(inicioTexto);
    const fim = Number(fimTexto);
 
    