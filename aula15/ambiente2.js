let valores = [5, 6, 7, 8, 9]
valores.sort()
/*console.log(valores)

for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}