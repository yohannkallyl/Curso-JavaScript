function carregar(){
var msg = document.getElementById("msg")
var h1 = document.getElementById("cumprimento")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    img.src = "manhã.jpg"
     // inserir imagem
     
     document.body.style.background = "#d3c0b7"

     h1.innerHTML = "BOM DIA!"

} else if (hora >= 12 && hora < 18){
    img.src = "tarde.jpg"
    // inserir imagem

    document.body.style.background = "#f8bf2d"

    h1.innerHTML = "BOA TARDE!"

    

}

else{
    img.src = "noite.jpg"
     // inserir imagem

     document.body.style.background = "#091b39"

     h1.innerHTML = "BOA NOITE!"
}


}