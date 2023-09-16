let num = document.getElementById("num");
let tab = document.getElementById("tabuada");
let valor = num.value;
let opcoes = tab.getElementsByTagName("option");
// Isso permite acessar cada opção individualmente.
let valorExiste = false;
// *Isso significa que o valor não existirá no começo, ou seja, antes de eu colocar um número, ele já vai entender que ele não existe




//!Ao inicializar "maiorValor" com -Infinity, você está efetivamente dizendo que, neste momento, não existe um valor real na lista (ou seja, é como se ainda não houvesse valores) e que qualquer valor encontrado posteriormente será maior do que -Infinity





function adicionar() {
    let num = document.getElementById("num")
    let tab = document.getElementById("tabuada")

    let opcoes = tab.getElementsByTagName("option")
    let valorExiste = false
    let valor = num.value
    if (num.value.length == 0 || num.value > 100) {
        alert("[ERRO] Verifique Novamente")
    } else {
        for (let i = 0; i < opcoes.length; i++) {

            if (opcoes[i].value == valor) {
                valorExiste = true
                break

            }

        }

        if (!valorExiste) {
            //TODO: esse "!" significa negação, ou seja, aqui é para quando o valorExiste for "false"
            const novaOpcao = document.createElement("option")
            novaOpcao.value = valor
            novaOpcao.text = `Valor ${valor} adicionado`
            tab.appendChild(novaOpcao)
            num.value = ""

            if (valor > maiorValor) {
                maiorValor = valor;
            }
        } else {
            alert("Este número já foi inserido")
        }



    }

}

function finalizar(){
    //TODO: QUANTIDADE DE NÚMEROS
   

    if(opcoes.length === 0){
        alert("Nenhum número cadastrado ainda")
    }else{
      
        let somaValores = 0
        let menorValor = Infinity
       let maiorValor = -Infinity
        
        //*Ao inicializar "maiorValor" com -Infinity, você está efetivamente dizendo que, neste momento, não existe um valor real na lista (ou seja, é como se ainda não houvesse valores) e que qualquer valor encontrado posteriormente será maior do que -Infinity


        for(let i = 0; i < opcoes.length; i++){
            let valor = Number(opcoes[i].value)

            if(!isNaN(valor)){
                if(valor > maiorValor){
                    maiorValor = valor
                } if( valor < menorValor){
                    menorValor = valor
                }
                
                somaValores += valor
            }
        }
        
        let mediaValores = somaValores/ opcoes.length
        let media = document.getElementById("media")
        let soma = document.getElementById("soma")
        let menor = document.getElementById("menor")
        let maior = document.getElementById("maior")
        let resfinal = document.getElementById("quantidade-numeros")
        
        resfinal.innerHTML = `Ao todo temos <u><strong>${tab.length}</strong><u> números cadastrados`

        maior.innerHTML = `O maior valor informado foi <u><strong>${maiorValor}<strong><u>`

        menor.innerHTML = `O menor valor informado foi <u><strong>${menorValor}<strong><u>`

        soma.innerHTML = `A soma de todos os valores é <u><strong>${somaValores}</strong></u>`

        media.innerHTML = `A média entre todos os valores é <u><strong>${mediaValores}</strong></u>`

        

        

        
        


        
    }

    
    

    

    
    

}