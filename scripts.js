const image = document.querySelector(".starbucks")
const circle = document.querySelector(".circle")

function trocaImagem(adressImg){
    image.src = adressImg
}

function trocaCor(color) {
  circle.style.background = color
}
