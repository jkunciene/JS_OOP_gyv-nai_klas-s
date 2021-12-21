let index = 0;

class animalForm {
    constructor(id = 0 ,name = '', age = 0){
        this.id = index;
        this.name = name;
        this.age = age;
    }

    asignValues(name, age){
        this.name = name;
        this.age = age;
    }

    renderCard(){
        index++;
        this.id = index;
        //console.log(this.id, index);
        const root = document.getElementById('cardsContainer');
        const formCard = document.createElement('div');
        formCard.id = 'card'+index;
        formCard.className = 'animalCard';
        const animalName = document.createElement('h3');
        animalName.innerText = this.name;
        const animalAge = document.createElement('p');
        animalAge.innerText = this.age + " :years old";
        formCard.append(animalName, animalAge);
        root.appendChild(formCard);
    }
    addRemove(){
        const formCard = document.getElementById('card'+this.id);
        const del = document.createElement('button');
        del.innerText = 'X';
        del.className = 'deleteBtn';
        formCard.appendChild(del);
        del.addEventListener('click', function(){ del.parentElement.remove() }, false);
    }
}

export default animalForm;