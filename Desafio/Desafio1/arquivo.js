function verificarPaisOrigem() {
    var nacionalidade = document.getElementById("nacionalidade")

    var resultado = document.getElementById("resultado")

    if (nacionalidade.value == "Brasil"){
        resultado.innerText = "Você é BRASILEIRO!"
    }

    else{
        resultado.innerText = "Você é ESTRANGEIRO!"
        
    }

}

