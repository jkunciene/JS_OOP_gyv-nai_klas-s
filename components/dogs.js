import animal from "./form.js";

class animalForm extends animal{
    constructor(id, name, age, legs = 0, fur = '', tail = '', breed = '') {
        super(id, name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
        this.breed = breed;
    }

    asignValues(name, age, legs, fur, tail, breed){
        super.asignValues(name, age);
        this.legs = legs;
        this. fur = fur;
        this.tail = tail;
        this.breed = breed;
    }

    renderCard(){
        super.renderCard();
        const formCard = document.getElementById('card'+this.id);
        const animalFur = document.createElement('p');
        animalFur.innerText = this.fur + " :fur";
        const animalTail = document.createElement('p');
        animalTail.innerText = this.tail + " :tail";
        const animalLegs = document.createElement('p');
        animalLegs.innerText = this.legs + " :legs";
        const animalBreed = document.createElement('p');
        animalBreed.innerText = this.breed + " :breed";
        formCard.append(animalFur, animalTail, animalLegs, animalBreed);
        super.addRemove();
    }
}

export default animalForm;