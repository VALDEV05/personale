const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtns = document.querySelectorAll('.close-button');

let overlay;
modalBtns.forEach(btn => {
    btn.onclick = function() {
        overlay = this.parentElement.parentElement.nextElementSibling
        overlay.classList.add('overlay--open');
    }
});
closeBtns.forEach(cBtn => {
    cBtn.onclick = function() {
        const overlayElements = document.querySelectorAll('.overlay');
        overlayElements.forEach(overlay => {
            overlay.classList.remove('overlay--open');
        });
    }
});

function onDocumentKeyUp(e) {
    if (e.keyCode === 27) {
        closeModal();
    }
}

function onDocumentClick(e) {
    if (e.target === overlay) {
        closeModal();
    }
}

document.addEventListener('click', onDocumentClick, false);
document.addEventListener('keyup', onDocumentKeyUp, false);









//$('.btn-1').click(function(){
//$('#uno').toggleClass('scaled');
//});