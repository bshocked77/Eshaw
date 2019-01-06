
var menu = document.getElementById('side-nav'); // side-nav element

function closeMenu(){
  menu.classList.add('closed');

  // remove page cover
  var pageCover = document.getElementById('menu-page-filter');
  document.body.removeChild(pageCover);
}


function openMenu(){
  menu.classList.remove('closed');

  // add page cover
  var newDiv = document.createElement('div');
  newDiv.id = 'menu-page-filter';
  document.body.insertBefore(newDiv, menu);


  var closeButton = document.getElementById('close-icon');
  closeButton.addEventListener("click", closeMenu);
}

var menuButton = document.getElementById('menu-icon');
menuButton.addEventListener("click", openMenu);
