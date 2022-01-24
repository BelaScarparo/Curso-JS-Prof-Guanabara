function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados...')
        //sempre testar com window.alert para verificar se o programa está funcionando e testar parte por parte.
    } else {
        res.innerHTML = `Contando:`
        let i = Number(ini.value)//convertemos o txti pra number, pq apesar dele ser numerico, ele não ta como Number
        let f = Number(fim.value)//estava como uma string
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert("Passo inválido, considerando passo 1")
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c++)
            res.innerHTML += ` ${c} \u{1F61C}`
            //contagem crescente
        }else {
            for (let c = i; c >= f; c-= p){
                res.innerHTML += `${c}\u{1F61C}`
                //contagem regressiva
            }
        }       res.innerHTML += `\u{1F3C1}`
       
    }
}
