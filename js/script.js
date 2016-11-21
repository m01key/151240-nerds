
var modalOpen = document.querySelector('.write_us .btn');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('i');
var modalName = modal.querySelector('#name');
var modalMail = modal.querySelector('#mail');
var modalText = modal.querySelector('#textarea');
var storageName = localStorage.getItem('name');
var storageMail = localStorage.getItem('mail');
var form = modal.querySelector('form');
var overlay = document.querySelector('.overlay');

modalOpen.addEventListener('click', function(e) {
  e.preventDefault();
  overlay.classList.add('overlay-open');
  modal.classList.add('modal-open');
  if (storageName && storageMail) {
    modalName.value = storageName;
    modalMail.value = storageMail;
    modalText.focus();
  } else {
    modalName.focus();
  }

  // console.log('клик');
});

modalClose.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.remove('modal-open');
  overlay.classList.remove('overlay-open');

  // console.log('закрываем');
});

overlay.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.remove('modal-open');
  overlay.classList.remove('overlay-open');
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains('modal-open')) {
      modal.classList.remove('modal-open');
      overlay.classList.remove('overlay-open');
    }
  }
});

form.addEventListener('submit', function(e) {
  if (!modalName.value || !modalMail.value || !modalText.value) {
    e.preventDefault();
    alert('Заполните все поля!');
    // console.log('введите имя и почту и текст письма');
  } else {
    localStorage.setItem('name', modalName.value);
    localStorage.setItem('mail', modalMail.value);

    // console.log('отправляем форму');  
  }
});


