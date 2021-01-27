import './hamburger-slider';

const checkboxes = document.querySelectorAll('input'),
    checkedElems = document.querySelectorAll('label');

for (let box of checkboxes){
    box.addEventListener('change', checkBoxing);
}

function checkBoxing(evt){
    for (let elem of checkedElems){
        elem.style.backgroundColor = "transparent";
        if (elem.dataset.name == evt.target.value){
            elem.style.backgroundColor = "#eafbc8";
        }
        console.log(elem.dataset.name == evt.target.value);
    }
}

class Burger{
    constructor(structure=[]){
        this.structure = structure;
    }

    editElems(elem, price, ccal){
        this.structure.pop(elem);
        countPrice()
    }

    countPrice(){

    }

    countCcal(){

    }
}

