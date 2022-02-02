function changeMode(){
  changeClasses();
  changeText();
}

function changeClasses(){
  button.classList.toggle(darModeClasse);
  h1.classList.toggle(darModeClasse);
  body.classList.toggle(darModeClasse);
  footer.classList.toggle(darModeClasse);
}

function changeText(){
  const ligthMode = "Ligth mode";
  const darkMode = "Dark mode";

  if(body.classList.contains('dark-mode')){
    button.innerHTML = ligthMode;
    h1.innerHTML = darkMode + "ON";
    return;
  }
  button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + "ON";

}

const darModeClasse = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementById('body')[0];
const footer = document.getElementById('footer')[0];


button.addEventListener('click', changeMode);