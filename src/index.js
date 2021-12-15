import validator from './validator.js';

const formDon = document.getElementById('donation');
let card = document.getElementById('number');
let btnOpenPopup = document.getElementById('btnPopup');

formDon.addEventListener('submit', function(e){
    e.preventDefault();
    let finalAnswer;
    let finalValidation = validator.isValid(card.value)
    //console.log(finalValidation);
    if (finalValidation==true){
        finalAnswer = 'valida.'
        btnOpenPopup.removeAttribute('disabled');
    } else {
        finalAnswer = 'invalida. Vuelva a intentarlo'
    }
    let hiddeNum = validator.maskify(card.value);
    document.getElementById("answerText").innerHTML = 'Su tarjeta ' + hiddeNum + ' es ' + finalAnswer;
});
//LINKS

//POPUP
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let namesUser = document.getElementById('names');

btnOpenPopup.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.add('active');
    popup.classList.add('active');
                //NAME
    let separateNames = namesUser.value.split(' ');
    let firstName = separateNames[0];
    //console.log(firstName);
    document.getElementById("nameUser").innerHTML = firstName;
});