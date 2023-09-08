function gerar() {
  var num = document.getElementById("number");
  var tab = document.getElementById("tabuada");

  if (num.value.length == 0) {
    alert("[ERRO] Faltam informações");
  } else {
    var n1 = Number(num.value);
    tab.innerHTML = ""
    
    // *limpar a tabuada após um valor
  }

  for(cont = 1; cont <= 10; cont++){
    var item = document.createElement("option")
    item.text = `${n1} x ${cont} = ${n1*cont}`
    tab.appendChild(item)
  }
}


// *for (inicialização; condição; iteração) {
  // *Bloco de código a ser repetido 

