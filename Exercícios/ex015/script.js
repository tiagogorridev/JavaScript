function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRRO] Verifique o ano novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('scr', 'bebe-h.jpg')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('scr', 'foto-adolescente-h.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('scr', 'jovem-h.jpeg')
            } else {
                //idoso
                img.setAttribute('scr', 'idoso-h.jpeg')
            }



        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('scr', 'bebe-m.jpg')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('scr', 'adolescente-m.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('scr', 'jovem-m.webp')
            } else {
                //idoso
                img.setAttribute('scr', 'idoso-m.webp')
            }

        }




        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}