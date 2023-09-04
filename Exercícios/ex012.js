var idade = 15
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log("Não vota")
}

else if (idade < 18 || idade > 65){
    console.log("Voto Opcional")
}
// o else if pode ser utilizado também, pois já economiza na crianção de blocos. Opção caso o if não satisfaça e você quieira fazer algo mais depois
 
else {
    console.log("Voto Obrigatório") 
}