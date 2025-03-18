// ora recupero i dati nel localStorage
const temaRecuperato = localStorage.getItem('theme') // 'dark'
// ora riempio lo span con id "theme" con temaRecuperato
document.getElementById('theme').innerText = temaRecuperato

const svuota = function () {
  // svuoto il localStorage
  localStorage.clear()
  // aggiorno lo span di prima con il null preso dal localStorage, perchè la chiave
  // "theme" non esiste più
  // null nel DOM diventa ''
  document.getElementById('theme').innerText = localStorage.getItem('theme')
}
