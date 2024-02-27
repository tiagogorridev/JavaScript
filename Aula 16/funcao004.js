function parimp(n) { // (n) = parâmetro
        if(n%2==0) { // if = ação
            return 'par' // par = retorno
        } else {
            return 'ímpar' // impar = retorno
        }
    }
    
    let res = parimp(36) // parimp = chamada
    console.log(res)