const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputTelefone.value = '';
});