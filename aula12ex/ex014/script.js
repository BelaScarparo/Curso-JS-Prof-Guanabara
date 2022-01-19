function carregar () {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var minuto = data.getMinutes()
//var hora = data.getHours()
var hora = 15
msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'fotodia.png'
    document.body.style.background = '#e2cd9f'
    msg.innerHTML += '<p>Bom dia!!'
    //bom dia
} else if (hora >= 13 && hora <= 18) {
    img.src = "fototarde.png"
    document.body.style.background = '#b9846f'
    msg.innerHTML += '<p>Boa tarde!!'
    //boa tarde
}else{
    img.src = "fotonoite.png"
    document.body.style.background = '#515154'
    msg.innerHTML += '<p>Boa noite!'
    //boa noite.
    }
}