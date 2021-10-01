function iniciarJogo() {
  var nivel = document.getElementById('nivel').value

  if (nivel === '') {
    alert('Selecione um nível para iniciar um jogo')
    return false
  } else {
    alert(nivel)
  }
}
