function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')

    var data = new Date()
    // var hora = data.getHours()

    var hora = 14

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12) {
        imagem.src = 'Imagens/fotomanha.jpg'
        document.body.style.background = '#251E10'

    } else if (hora >=12 && hora < 18) {
        imagem.src = 'Imagens/fototarde.jpg'
        document.body.style.background = '#FFAC08'
    } else {
        imagem.src = 'Imagens/fotonoite.png'
        document.body.style.background = '#275184'
    }

}