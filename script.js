// input //
const namecardInput = document.querySelector(".name-cardinput")
const numbcardInput = document.querySelector (".num-cardinput")
const mmInput = document.querySelector (".card-mminput")
const yyInput = document.querySelector (".card-yyinput")
const numbCvcInput = document.querySelector (".cvc-cardinput")


const button = document.querySelector (".btn")
const form = document.querySelector (".formulario")
const thankYou = document.querySelector (".congratulations")

const regCardNumber = /\d{4} \d{4} \d{4} \d{4}/g


//card// 
const numbCard = document.querySelector(".num-card")
const nameCard = document.querySelector(".name-card")
const nameCardMM = document.querySelector (".card-mm")
const nameCardYY = document.querySelector (".card-yy")
const cardCvc = document.querySelector(".card-cvc")



function format (s) {
  return s.toString().replace(/\s+/g, '').replace(/(\d{4})(?=.)/g, '$& ');
}

function setCardNumber (event) {
  numbCard.innerText = format(event.target.value);
  event.target.value = format(event.target.value)
}

function SetCardName (event) {
  nameCard.innerText = format(event.target.value)
}



function SetCardMM (event) {
  nameCardMM.innerText = format(event.target.value)
}

function setCardYY (event) {
  nameCardYY.innerText = format (event.target.value)
}

function setCardCVC (event) {
  cardCvc.innerText = format (event.target.value)
}


namecardInput.addEventListener("keyup", SetCardName)
numbcardInput.addEventListener("keyup", setCardNumber)



mmInput.addEventListener("keyup", SetCardMM )
yyInput.addEventListener("keyup", setCardYY)
numbCvcInput.addEventListener("keyup", setCardCVC)
