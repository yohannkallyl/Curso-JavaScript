function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById("txtano")
// formulário do ano
var res = document.getElementById("res")
if(fano.value.length == 0 || fano.value > ano ){
    alert("[ERRO] Verifique os dados e tente novamente")

// essa parte é basicamente quando dá erro


} else{
    var cor = document.getElementById("cor")
    var def = document.getElementById("definir")
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""
    
    // valor vazio
    
    var img = document.createElement("img")
     img.setAttribute("id", "foto")
    
     //  Em resumo, criamos por aqui um elemento img com o id "foto"

   
    if (fsex[0].checked){
        genero = "Homem"
        if (idade >= 0 && idade < 10){
            img.setAttribute("src", "bebe-homem.jpg")
            document.body.style.background = "#ffd9b6"
            def.innerHTML = "CRIANÇA"
            cor.style.color = "black"
        } else if (idade < 21){
            img.setAttribute("src", "jovem-homem.jpg")
            document.body.style.background = "#211c22"
            def.innerHTML = "JOVEM"
            cor.style.color = "white"
        } else if(idade < 50){
            img.setAttribute("src", "adulto-homem.jpg")
            document.body.style.background = "#275076"
            def.innerHTML = "ADULTO"
            cor.style.color = "white"
        } else{
            img.setAttribute("src", "velho-homem.jpg")
            document.body.style.background = "#4d382e"
            def.innerHTML = "IDOSO"
            cor.style.color = "white"
        }

    
    
    } else if (fsex[1].checked){
        genero = "Mulher"
        if (idade >= 0 && idade < 10){
            img.setAttribute("src", "bebe-mulher.jpg")
            document.body.style.background = "#ffd9b6"
            def.innerHTML = "CRIANÇA"
            cor.style.color = "black"
        } else if (idade < 21){
            img.setAttribute("src", "jovem-mulher.jpg")
            document.body.style.background = "#a00400"
            def.innerHTML = "JOVEM"
            cor.style.color = "white"
            
        } else if (idade < 50){
            img.setAttribute("src", "adulto-mulher.jpg")
            document.body.style.background = "#362b38"
            def.innerHTML = "ADULTA"
            cor.style.color = "white"
        } else{
            img.setAttribute("src", "velha-mulher.jpg")
            document.body.style.background = "#ecede8"
            def.innerHTML = "IDOSA"
            cor.style.color = "black"
        }
    }


    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    res.appendChild(img)
    // método para adicionarmos uma imagem
}
}