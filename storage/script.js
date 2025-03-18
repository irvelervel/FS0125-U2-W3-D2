// I WEB STORAGE nascono con la standardizzazione di HTML5, al fine di migliorare
// una tecnologia già esistente: i cookies.
// Migliorano i cookie superando le loro principali 2 limitazioni:
// a) I cookies possono contenere al massimo 4KB di dati
// b) I cookies non possiedono il concetto di "sessione"

// La soluzione è stata introdurre come standard due nuove tecnologie per la memorizzazione
// di informazioni lato "client" (browser) a breve/medio termine:
// 1) localStorage (che memorizza i dati fino alla loro eliminazione)
// 2) sessionStorage (che memorizza i dati fino alla chiusura del tab/browser)

// Come superano le limitazioni dei cookies? sessionStorage provvede all'auto-eliminazione
// di dati a breve termine durante la chiusura del tab e in totale possono utilizzare
// fino ad un totale di 5MB.

// Nonostante queste due tecnologie (session/local) possiedano due comportamenti diversi,
// le loro metodologie di utilizzo sono praticamente identiche, in quanto i loro
// metodi JS sono in comune:

// setItem(key, value) -> salva una coppia chiave: valore dentro lo storage scelto
// getItem(key) -> recupera grazie alla chiave un valore salvato in precedenza
// removeItem(key) -> rimuove una singola proprietà grazie alla sua chiave
// clear() -> svuota TUTTO il contenuto (per il dominio corrente) della memoria selezionata

// potete invocare questi 4 metodi da una delle memorie disponibile:
// es. localStorage.clear(), sessionStorage.getItem('gigio') etc.

// Queste memorie nascono con lo scopo di migliorare l'esperienza utente, raccogliere
// preferenze/metriche, evitare continui login etc.
// NON utilizzatele per salvare user/password o dati sensibili (perchè sono completamente
// in chiaro), e ricordate che sono memorie vincolate al browser utilizzato (cioè
// salvando una chiave da Chrome, non aspettatevi di ritrovarla su Firefox).

// piallo tutto
// localStorage.clear() // svuota tutto il contenuto di localStorage
// setto proprietà
localStorage.setItem('punteggio', '50') // sia la chiave che il valore devono essere stringhe!
localStorage.setItem('theme', 'dark')
// rimuovo una proprietà
localStorage.removeItem('punteggio')
// leggo una proprietà
const tema = localStorage.getItem('theme') // 'dark'
const boh = localStorage.getItem('cosa-che-non-esiste') // null

console.log('VALORE DEL THEME', tema)
console.log('VALORE NON TROVATO', boh)
