const arrowRight = document.querySelector('.fa-angle-right'),
    arrowLeft = document.querySelector('.fa-angle-left');

let screenShow = 1;

arrowRight.addEventListener('click', ()=>{
    document.querySelector(`#step${screenShow}`).classList.add('hidden-screen');
    document.querySelector(`#step${screenShow+1}`).classList.remove('hidden-screen');
    screenShow++;
    if (screenShow > 1){
        arrowLeft.classList.remove('hidden-arrow');
    }
    if (screenShow > 2){
        arrowRight.classList.add('hidden-arrow');
    }
});

arrowLeft.addEventListener('click', ()=>{
    document.querySelector(`#step${screenShow}`).classList.add('hidden-screen');
    document.querySelector(`#step${screenShow-1}`).classList.remove('hidden-screen');
    screenShow--;
    if (screenShow < 2){
        arrowLeft.classList.add('hidden-arrow');
    }
    if (screenShow < 3){
        arrowRight.classList.remove('hidden-arrow');
    }
});