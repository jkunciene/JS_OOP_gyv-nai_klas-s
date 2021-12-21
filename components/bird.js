import animal from "./form.js";

class animalForm extends animal{
    constructor(id, name, age, wings = 0, feathers = '', tail = '', beak = '') {
        super(id, name, age);
        this.wings = wings;
        this.feathers = feathers;
        this.tail = tail;
        this.beak = beak;
    }

    asignValues(name, age, wings, feathers, tail, beak){
        super.asignValues(name, age);
        this.wings = wings;
        this.feathers = feathers;
        this.tail = tail;
        this.beak = beak;
    }

    renderCard(){
        super.renderCard();
        const formCard = document.getElementById('card'+this.id);
        const catFur = document.createElement('p');
        catFur.innerText = this.feathers + " :feathers";
        const catTail = document.createElement('p');
        catTail.innerText = this.tail + " :tail";
        const catLegs = document.createElement('p');
        catLegs.innerText = this.wings + " :wings";
        const animalBeak = document.createElement('p');
        animalBeak.innerText = this.beak + " :beak";
        formCard.append(catFur, catTail, catLegs, animalBeak);
        super.addRemove();
    }
}

export default animalForm;