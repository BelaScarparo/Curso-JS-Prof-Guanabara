function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 00) {
        window.alert('Erro! Insira um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =  ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
           
        }
    }

}