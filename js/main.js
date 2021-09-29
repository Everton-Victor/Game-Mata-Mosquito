var altura = 0
var largura = 0

const ajustarTamanhoPalcoJogo = () => {
  altura = screen.availHeight
  largura = screen.availWidth
}

ajustarTamanhoPalcoJogo()

function posicaoAleatoria() {
  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoY, posicaoX)

  // Criar elementos HTML
  var mosquito = document.createElement('img') // Cria uma tag img
  mosquito.src = './img/mosquito.png' // add o atributo src
  mosquito.className = 'mosquito1' // add uma class
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  document.body.appendChild(mosquito) // add no body
}
