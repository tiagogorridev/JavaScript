let amigo = {nome: 'José', sexo: 'M', peso: 70, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}

}
amigo.engordar(2) // função dentro de variavel
console.log(`${amigo} pesa ${amigo.peso}Kg`)