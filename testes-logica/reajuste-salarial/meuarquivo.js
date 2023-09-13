let prize = Number(prompt("Qual é o salário do funcionário?"))
let check = prize * 0.15
let check2 = check + prize
alert(`Com o novo reajuste salarial, o salário sofreu um reajuste de 15%, passando de ${prize.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})} e tornando-se ${check2.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}`)