import animal from "./form.js";

class animalForm extends animal{
    constructor(id, name, age, legs = 0, fur = '', tail = '') {
        super(id, name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
    }

    asignValues(name, age, legs, fur, tail){
        super.asignValues(name, age);
        this.legs = legs;
        this. fur = fur;
        this.tail = tail;
    }

    renderCard(){
        super.renderCard();
        const formCard = document.getElementById('card'+this.id);
        const catFur = document.createElement('p');
        catFur.innerText = this.fur + " :fur";
        const catTail = document.createElement('p');
        catTail.innerText = this.tail + " :tail";
        const catLegs = document.createElement('p');
        catLegs.innerText = this.legs + " :legs";
        formCard.append(catFur, catTail, catLegs);
        super.addRemove();
    }
}

export default animalForm;