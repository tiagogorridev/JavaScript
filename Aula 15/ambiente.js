let num = [2, 1, 3 , 4, 5 ]

num [3] = 6 // cria outro numero
num.push(7) // cria um valor ao array por último

console.log(`Nosso vetor é o: ${num}, que possui ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`Aqui o vetor esta em ordem crescente: ${num.sort()}`)

for(let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}