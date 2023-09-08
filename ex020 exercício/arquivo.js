function contar(){
    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var res = document.getElementById("resultado")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert("[ERRO] Faltam informações!")
        // Evitar que campos fiquem vazios
    } else{
        res.innerHTML = "Contando: "
    }

    var inici = Number(inicio.value)
    var fi = Number(fim.value)
    var pas = Number(passo.value)
    // Por mais que as caixas estejam como números, elas provavemente retornarão em string. Por isso, transformei os valores em número

    if (inici < fi){
    
        for(c = inici; c <= fi; c += pas ){
        res.innerHTML += ` ${c} 👉` 
    }
} else{
    for(c = inici ; c >= fi ; c -= pas ){
        res.innerHTML += ` ${c} 👉`
    }
   
}

    res.innerHTML += "🚩"


}