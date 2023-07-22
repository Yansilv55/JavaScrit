function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementsByName('txtano')[0]; // Acessando o valor do primeiro elemento
    var res = document.querySelector('div#res');
    var img = document.createElement('img'); // Declaração da variável "img"

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.png');
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'rapaz.png');
            } else if (idade < 50) {
                // Homem
                img.setAttribute('src', 'homem.png');
            } else {
                // Idoso
                img.setAttribute('src', 'Senhor.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criança.png');
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'moça.png');
            } else if (idade < 50) {
                // Mulher
                img.setAttribute('src', 'mulher.png');
            } else {
                // Idoso
                img.setAttribute('src', 'Senhora.png');
            }
        } else {
            // Caso nenhum gênero esteja selecionado, mostrar imagem padrão
            img.setAttribute('src', 'imagem_padrao.png');
        }

        // Mostrar o resultado com o gênero (caso não tenha feito isso dentro das condições)
        res.style.textAlign = 'center'
        res.innerHTML = `Idade calculada: ${genero} de ${idade} anos`;
        res.appendChild(img); // Adicionar a imagem ao resultado
    }
}

