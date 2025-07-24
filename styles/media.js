function verificar() {
    var nome = document.getElementById(`nome`).value.trim();
    var classe = document.getElementsByName(`radano`);
    var res = document.getElementById(`res`);

    var nota1 = Number(document.getElementById(`nota_1`).value);
    var nota2 = Number(document.getElementById(`nota_2`).value);
    var nota3 = Number(document.getElementById(`nota_3`).value);
    var nota4 = Number(document.getElementById(`nota_4`).value);

    if (nome === ``) {
        window.alert(`Por favor, preencha o nome do aluno.`);
        return;
    }

    if (
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)
    ) {
        window.alert(`PREENCHA TODAS AS NOTAS COM [NÚMEROS VÁLIDOS]`);
        return;
    }

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10 ||
        nota4 < 0 || nota4 > 10
    ) {
        window.alert(`AS NOTAS DEVEM ESTAR ENTRE [0 A 10]`);
        return;
    }

    var sala = "";
    if (classe[0].checked) {
        sala = "1 Ano";
    } else if (classe[1].checked) {
        sala = "2 Ano";
    } else {
        sala = "3 Ano";
    }

    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    var situacao = ``;

    if (media < 4) {
        situacao = `REPROVADO`;
    } else if (media < 6) {
        situacao = `RECUPERAÇÃO`;
    } else {
        situacao = `APROVADO`;
    }

    res.style.textAlign = `center`;
    res.style.fontSize = `2.5vh`;
    res.innerHTML = `O aluno <strong>${nome}</strong> do <strong>${sala}</strong> teve a média de <strong>${media.toFixed(2)}</strong> pontos. Situação: <strong>${situacao}</strong>`;

    window.alert(`Resultado verificado com sucesso!`);
}