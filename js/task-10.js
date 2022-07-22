function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDstr: document.querySelector('button[data-destroy]'),
  container: document.querySelector('#boxes'),
}

refs.btnCreate.addEventListener('click', onBtnCreateClick);
refs.btnDstr.addEventListener('click', onBtnDstrClick);
refs.inputEl.addEventListener('input', onInputChange)



function onBtnCreateClick(event) {

  const numberDiv = event.currentTarget.value;

function createBoxes(amount) {
  const divCreated = document.createElement('div');
  amount = numberDiv;
  refs.container.append(divCreated);
}
  
}

function onBtnDstrClick() {
  
}

function onInputChange() {
  
}