import './hamburger-slider';

const checkboxes = document.querySelectorAll('input'),
    checkedElems = document.querySelectorAll('label');

for (let box of checkboxes){
    box.addEventListener('change', checkBoxing);
}

function checkBoxing(evt){
    for (let elem of checkedElems){
        elem.style.backgroundColor = "transparent";
        if (elem.children[0].checked){
            elem.style.backgroundColor = "#eafbc8";
        }
    }
}

class Burger{
    constructor(size, topping, spice, price=0, ccal=0){
        this.size = size;
        this.topping = topping;
        this.spice = spice;

        this.price = price;
        this.ccal = ccal;
    }

    editSize(evt){
        if(evt.target.value != this.size){
            if (this.size){
                this.countPrice(-document.querySelector(`label[data-name='${this.size}'] .price`).innerText.split(' ')[0]);
                this.countCcal(-document.querySelector(`label[data-name='${this.size}'] .params`).innerText.split(' ')[0]);
            }
            this.size = evt.target.value;
            this.countPrice(document.querySelector(`label[data-name='${evt.target.value}'] .price`).innerText.split(' ')[0]);
            this.countCcal(document.querySelector(`label[data-name='${evt.target.value}'] .params`).innerText.split(' ')[0]);
        };
    }

    editTopping(evt){
        if(evt.target.value != this.topping){
            if (this.topping){
                this.countPrice(-document.querySelector(`label[data-name='${this.topping}'] .price`).innerText.split(' ')[0]);
                this.countCcal(-document.querySelector(`label[data-name='${this.topping}'] .params`).innerText.split(' ')[0]);
            }
            this.topping = evt.target.value;
            this.countPrice(document.querySelector(`label[data-name='${evt.target.value}'] .price`).innerText.split(' ')[0]);
            this.countCcal(document.querySelector(`label[data-name='${evt.target.value}'] .params`).innerText.split(' ')[0]);
        };
    }

    editSpices(evt){
        if(evt.target.value != this.spice){
            if (this.spice){
                this.countPrice(-document.querySelector(`label[data-name='${this.spice}'] .price`).innerText.split(' ')[0]);
                this.countCcal(-document.querySelector(`label[data-name='${this.spice}'] .params`).innerText.split(' ')[0]);
            }
            this.spice = evt.target.value;
            this.countPrice(document.querySelector(`label[data-name='${evt.target.value}'] .price`).innerText.split(' ')[0]);
            this.countCcal(document.querySelector(`label[data-name='${evt.target.value}'] .params`).innerText.split(' ')[0]);
        };
    }

    countPrice(elemPrice){
        this.price += Number(elemPrice);
        document.querySelector('.total-price').innerText = this.price;
    }

    countCcal(elemCcal){
        this.ccal += Number(elemCcal);
        document.querySelector('.total-ccal').innerText = this.ccal;
    }
}

let burger = new Burger();
let choiceSize = document.querySelectorAll("input[name='size-burger']");
let choiceToppings = document.querySelectorAll("input[name='topping']");
let choiceSpices = document.querySelectorAll("input[name='spices']")

for (let size of choiceSize){
    size.addEventListener('change', burger.editSize.bind(burger));
}

for (let topping of choiceToppings){
    topping.addEventListener('change', burger.editTopping.bind(burger));
}

for (let spice of choiceSpices){
    spice.addEventListener('change', burger.editSpices.bind(burger));
}