'use strict'

var buttonSubmit = document.querySelector('.review-form__button');
var popupFail = document.querySelector('.popup__fail');
var popupSuccess = document.querySelector('.popup__success');

var buttonFail = document.querySelector('.popup__fail-button');
var buttonSuccess = document.querySelector('.popup__success-button');

var inputs = document.querySelectorAll('.fieldset__text');

function showPopup(popup) {
  popup.style.display = 'block';
}

function closePopup(popup) {
  popup.style.display = 'none';
}

buttonSubmit.addEventListener('click', function() {
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.checkValidity() == false)
    console.log(i);
  
  }
});



buttonFail.addEventListener('click', function() {
  closePopup(popupFail);
});

buttonSuccess.addEventListener('click', function() {
  closePopup(popupSuccess);
});
