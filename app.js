function sortear() {

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
 
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
    alert('A quantidade deve ser um número inteiro maior que zero.');
    return;
}

if (!Number.isInteger(inicio) || !Number.isInteger(fim) ||
    inicio < 1 || fim < 1) {
    alert('O início e o fim devem ser números inteiros maiores que zero.');
    return;
}

if (inicio > fim) {
    alert('O valor inicial não pode ser maior que o valor final.');
    return;
}

