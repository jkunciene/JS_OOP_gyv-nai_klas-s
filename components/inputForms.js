import catsForm from "./cats.js";
import dogsForm from "./dogs.js";
import birdsForm from "./bird.js";

function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function animalsInput(type){
    let obj;
    if(type == 'cats') obj = new catsForm;
    else if(type == 'dogs') obj = new dogsForm;
    else if(type == 'birds') obj = new birdsForm;
    const inputSec = document.getElementById('inputSection');
    const inputCard = document.createElement('form');
    inputCard.id = "inputCard";
    const exit = document.createElement('button');
    exit.id = 'exitInput';
    exit.innerText = 'X';
    inputCard.append(exit);
    exit.addEventListener('click', function(){ exit.parentElement.remove() }, false);
    Object.entries(obj).forEach(elem => {
        //console.log(obj);
        if(elem[0] == "id") return;
        const label = document.createElement('label');
        label.innerText = capitalize(elem[0]);
        const input = document.createElement('input');
        input.type = typeof(elem[1]);
        input.id = elem[0];
        label.appendChild(input)
        inputCard.appendChild(label);
        input.required = true;
    });
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'submit';
    inputCard.appendChild(submit);
    inputSec.appendChild(inputCard);
    if(type == 'cats') submit.addEventListener('click', function(){ collectData(obj,type), formsInput(type)}, false);
    else if(type == 'dogs') submit.addEventListener('click', function(){ collectData(obj,type), formsInput(type)}, false);
    else if(type == 'birds') submit.addEventListener('click', function(){ collectData(obj,type), formsInput(type)}, false);
}

function collectData(obj, type){
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    if(inputs.length == 5)
    obj.asignValues(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);
    else if(inputs.length == 6)
    obj.asignValues(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    else if(inputs.length == 7)
    obj.asignValues(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value);
    
    obj.renderCard();
}

function formsInput(input){
    if(document.getElementById('inputCard')){
        const tmp = document.getElementById('inputCard');
        tmp.remove();
    }
    animalsInput(input);
}

export default formsInput;