import formsInput from "./components/inputForms.js";

let index=0;

const root = document.getElementById('root');

const cardsContainer = document.createElement('div');
cardsContainer.id = 'cardsContainer';

const inputSelect = document.createElement('div');
inputSelect.id = 'inputSection';
root.appendChild(inputSelect);

const buttonContainer = document.createElement('div');
buttonContainer.id = 'btnContainer';

const cats = document.createElement('button');
cats.innerText = 'CATS';
cats.id = 'cats';
cats.addEventListener('click', function(){ formsInput(cats.id)}, false);

const dogs = document.createElement('button');
dogs.innerText = 'DOGS';
dogs.id = 'dogs';
dogs.addEventListener('click', function(){ formsInput(dogs.id)}, false);

const birds = document.createElement('button');
birds.innerText = 'BIRDS';
birds.id = 'birds';
birds.addEventListener('click', function(){ formsInput(birds.id)}, false);

buttonContainer.append(cats, dogs, birds);
inputSelect.append(buttonContainer);
root.append(cardsContainer);