let resposta = document.getElementById('resposta')
console.log(resposta)
let resposta2 = document.getElementById('resposta2')
console.log(resposta2)
let resposta3 = document.getElementById('resposta3')
console.log(resposta3)

function calcularV(){
    let V = 0
    let R = Number(document.getElementById('R').value)
    let A = Number(document.getElementById('A').value)

    V = R * A

    resposta.innerHTML = "A voltagem é " + V 
    resposta.style.color = 'white'
}
function calcularR(){
    let R2 = 0
    let V2 = Number(document.getElementById('V2').value)
    let A2 = Number(document.getElementById('A2').value)

    R2 = V2 / A2

    resposta2.innerHTML = "A resistência é " + R2
    resposta2.style.color = 'white'
}
function calcularA(){
    let A3 = 0
    let R3 = Number(document.getElementById('R3').value)
    let V3 = Number(document.getElementById('V3').value)

    A3 = V3 / R3

    resposta3.innerHTML = "A corrente elétrica é " + A3 
    resposta3.style.color = 'white'
}