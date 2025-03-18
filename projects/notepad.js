// il progetto dovrà avere 3 funzionalità:
// pulsante SALVA -> salvare l'attuale contenuto della textarea nel localStorage, e notificare l'utente
// pulsante CARICA -> se è presente un contenuto da ripristinare, riempirci la textarea,
// e notificare l'utente. Altrimenti, fornire un messaggio d'errore
// pulsante RESET -> svuota la textarea, rimuove l'eventuale contenuto salvato e
// notifica l'utente

// recupero un riferimento stabile al campo textarea in modo da utilizzarlo
// in tutte le funzioni collegate ai bottoni
const textAreaInput = document.getElementById('content')

// prendere i riferimenti ai pulsanti e applicarci del comportamento
// PULSANTE SALVA
const saveButton = document.getElementById('save')
saveButton.addEventListener('click', function () {
  // 1) recuperare il contenuto della textarea
  const text = textAreaInput.value

  // 2) salvare il contenuto della textarea nel localStorage
  localStorage.setItem('notepad', text)

  // 3) notificare l'utente dell'operazione andata a buon fine
  // alert('contenuto salvato!')
  const successAlert = document.getElementById('success-alert')

  // -----RESET PRECEDENTE ANIMAZIONE-----
  successAlert.classList.remove('alert-coming')
  successAlert.classList.remove('alert-going')
  successAlert.classList.add('invisible')
  // -----RESET PRECEDENTE ANIMAZIONE-----

  successAlert.classList.remove('invisible')
  successAlert.classList.add('alert-coming')

  setTimeout(function () {
    successAlert.classList.add('alert-going')
  }, 3000) // 3s
})

// PULSANTE CARICA
const loadButton = document.getElementById('load')
loadButton.addEventListener('click', function () {
  // recuperare il valore salvato, se presente
  const savedContent = localStorage.getItem('notepad')

  if (savedContent !== null) {
    // o semplicemente if(savedContent)
    // utilizzarlo come nuovo contenuto della textarea
    textAreaInput.value = savedContent

    //   notificare l'utente dell'operazione andata a buon fine
    const loadAlert = document.getElementById('load-alert')

    // -----RESET PRECEDENTE ANIMAZIONE-----
    loadAlert.classList.remove('alert-coming')
    loadAlert.classList.remove('alert-going')
    loadAlert.classList.add('invisible')
    // -----RESET PRECEDENTE ANIMAZIONE-----

    loadAlert.classList.remove('invisible')
    loadAlert.classList.add('alert-coming')

    setTimeout(function () {
      loadAlert.classList.add('alert-going')
    }, 3000) // 3s
  } else {
    // savedContent era null :\
    // mostriamo un messaggio d'errore
    const errorAlert = document.getElementById('error-alert')

    // -----RESET PRECEDENTE ANIMAZIONE-----
    errorAlert.classList.remove('alert-coming')
    errorAlert.classList.remove('alert-going')
    errorAlert.classList.add('invisible')
    // -----RESET PRECEDENTE ANIMAZIONE-----

    errorAlert.classList.remove('invisible')
    errorAlert.classList.add('alert-coming')

    setTimeout(function () {
      errorAlert.classList.add('alert-going')
    }, 3000) // 3s
  }
})

// PULSANTE RESET
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', function () {
  // svuotare la textarea
  textAreaInput.value = ''

  // cancellare la chiave "notepad" dal localStorage
  localStorage.removeItem('notepad')

  // notificare l'utente del reset
  const resetAlert = document.getElementById('reset-alert')

  // -----RESET PRECEDENTE ANIMAZIONE-----
  resetAlert.classList.remove('alert-coming')
  resetAlert.classList.remove('alert-going')
  resetAlert.classList.add('invisible')
  // -----RESET PRECEDENTE ANIMAZIONE-----

  resetAlert.classList.remove('invisible')
  resetAlert.classList.add('alert-coming')

  setTimeout(function () {
    resetAlert.classList.add('alert-going')
  }, 3000) // 3s
})
