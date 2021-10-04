const iniciarJogo = () => {
  let nivel = document.getElementById('nivel').value

  if (nivel === '') {
    alert('Selecione um nível para iniciar um jogo')
    return false
  } else {
    window.location.href = '../App.html?' + nivel // Passa como parametro
  }
}
