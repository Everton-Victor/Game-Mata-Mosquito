let altura = 0
let largura = 0
let vidas = 1
let tempo = 10
let criaMosquitoTempo = 1500

let nivel = window.location.search // Captura apenas o parametro da url
nivel = nivel.replace('?', '')

switch (nivel) {
  case 'normal':
    criaMosquitoTempo = 1500
    break
  case 'dificil':
    criaMosquitoTempo = 1000
    break
  case 'pro':
    criaMosquitoTempo = 750
    break
}

const ajustarTamanhoPalcoJogo = () => {
  altura = screen.availHeight
  largura = screen.availWidth
}

ajustarTamanhoPalcoJogo()

const cronometro = setInterval(() => {
  tempo--

  if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criarMosquito)
    window.location.href = 'vitoria.html'
  } else {
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)

const posicaoAleatoria = () => {
  // remover o mosquito anterior caso existe
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    if (vidas >= 3) {
      //Game over
      window.location.href = 'fim_de_jogo.html'
    } else {
      document.getElementById('c' + vidas).src = './img/coracao_vazio.png'
      vidas++
    }
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90
  let posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.clear()
  console.log(posicaoY, posicaoX)

  // Criar elementos HTML
  let mosquito = document.createElement('img') // Cria uma tag img
  mosquito.src = './img/mosquito.png' // add o atributo src
  mosquito.className = ajustarTamanhoAleatorio() + ' ' + inverterEixoAleatorio() // add uma class
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  document.body.appendChild(mosquito) // add no body

  mosquito.onclick = function () {
    this.remove()
  }
}

const ajustarTamanhoAleatorio = () => {
  let classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

const inverterEixoAleatorio = () => {
  let classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}
