let prize = Number(prompt("Qual é o preço do produto?"))
let check = prize*0.05
let check2 = prize-check
alert(`O valor ${prize} com 5% de  desconto ficará por ${check2.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}`)
