const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Dia já incluso')
    return
  }

  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
  JSON.parse(localStorage.getItem("NLWSetup@habits"))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
