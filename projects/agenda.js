const createListElement = function (name, date) {
  // ora creo l'elemento <li> da appendere alla lista sottostante
  const newLi = document.createElement('li') // <li></li>
  newLi.classList.add('list-group-item') // <li class="list-group-item"></li>
  newLi.innerText = name + ' | ' + date
  // l'unica cosa che ci manca è appendere l'li alla ul
  const ulList = document.querySelector('#appointments-list ul')
  ulList.appendChild(newLi)
}

// creo una variabile globale in modo da memorizzare gli appuntamenti che creo
let appointmentsArray
if (localStorage.getItem('appointments')) {
  // esiste la chiave "appointments"
  // riparto dalla stringa salvata in localStorage e RICREO l'array originale
  // cioè faccio il contrario di JSON.stringify()
  appointmentsArray = JSON.parse(localStorage.getItem('appointments'))
} else {
  // non ho memoria in localStorage
  appointmentsArray = []
}

console.log('appointmentsArray', appointmentsArray)
// ci sono tutti! mancherebbe solo da ricreare la lista...
appointmentsArray.forEach((app) => {
  // per ogni appuntamento (oggetto "app") creo il suo <li> con la funzione
  // createListElement
  createListElement(app.name, app.date)
})

class Appointment {
  constructor(_name, _date) {
    this.name = _name
    this.date = _date
  }
}

// come prima cosa raccolgo i riferimenti al campo "nome appuntamento" e "data/ora"
const appointmentNameInput = document.getElementById('appointment-name')
const appointmentDateInput = document.getElementById('appointment-date')

// ora recupero un riferimento al tag form...
const form = document.getElementById('appointment-form')

// ...e intervengo sul suo evento di submit
form.addEventListener('submit', function (e) {
  e.preventDefault()
  // ora possiamo integrare la nostra logica!
  // prendo i VALORI degli input, e creo un oggetto
  const name = appointmentNameInput.value // 'Dentista'
  const date = appointmentDateInput.value // "2025-03-20T17:30"
  const appointmentSaved = new Appointment(name, date)
  console.log('appointmentSaved', appointmentSaved)
  // ora l'oggetto dell'appuntamento è stato creato
  // voglio SALVARLO nel localStorage!

  // riempio l'array con un nuovo elemento
  appointmentsArray.push(appointmentSaved)

  // salvo l'array nel localStorage!
  // però! JS è TERRIBILE nel cercare di convertire automaticamente OGGETTI in STRINGHE
  // localStorage.setItem('appointments', appointmentsArray) // JS HA SALVATO "[object Object]"

  // dobbiamo CONVERTIRE NOI l'array in una stringa JSON valida prima di salvarla nel localStorage
  localStorage.setItem('appointments', JSON.stringify(appointmentsArray))
  // ora nel localStorage è stato salvato l'array in un formato valido, leggibile e soprattutto
  // REVERSIBILE

  // invoco la funzione che creerà il singolo <li> nella lista,
  // fornendole i dati necessari presi dai 2 input del form!
  createListElement(name, date)

  // svuoto il form
  form.reset()
})
