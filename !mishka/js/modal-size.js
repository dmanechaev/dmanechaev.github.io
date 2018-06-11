'use strict'

var overlay = document.querySelector('.modal__overlay');
var modal = document.querySelector('.modal');

var addToCart = document.querySelectorAll('.item__cart');

var closeModal = modal.querySelector('.modal__close');

function showPopup(popup) {
  popup.style.display = 'block';
}

function closePopup(popup) {
  popup.style.display = 'none';
}

for (var i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', function() {
    showPopup(overlay);
    showPopup(modal);
  });
}

closeModal.addEventListener('click', function() {
  closePopup(overlay);
  closePopup(modal);
});

/*submit.addEventListener ('click', function() {
	closePopup(overlay);
	closePopup(modal);
});*/
