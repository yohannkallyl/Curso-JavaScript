let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

//?nossa array que armazenará os dados

function isNumero(n){
    
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}





function adicionar(){
   
    // TODO: se o número for um número e ele não estiver na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        
        // ! vai adicionar o num em valores
        valores.push(Number(num.value))
        
        //Criando os itens da lista
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`

        //?Aparecer os itens na lista
        lista.appendChild(item)
        
        
        //? Quando aparecer os itens da lista, ele apagará a div res (atualizando os contadores)
        res.innerHTML = ""
        
    } else{
        alert("Valor inválido ou já encontrado na lista")
    }

    //TODO: Resetar campo após adicionar número
    
    
    num.value = ""
    
    
    //? isso aqui faz com que após zerar o campo, ele já fique selecionado, para que não seja preciso clicar nele de novo.
    
    num.focus()
}

function finalizar(){
    
    if(valores.length == 0){
        alert("Adiciona valores antes de finalizar")
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        
        
        
        //**essa estrutura analisa UM POR UM para saber quem é o maior e quem é o menor
        
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        //? uso a concatenação para servir como a adição de um outro parágrafo
    }
}