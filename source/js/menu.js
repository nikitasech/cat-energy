(function () {
  const menuElement = document.querySelector('.main-header__nav');
  const menuToggleElement = document.querySelector('.main-header__menu-toggle');

  function toggleMenu() {
    menuElement.classList.toggle('main-header__nav--closed');
    menuToggleElement.classList.toggle('main-header__menu-toggle--cross');
  }

  function onToggleMenuClick() {
    toggleMenu();
  }

  function onToggleMenuPressEnter(evt) {
    evt.preventDefault();

    if (evt.code === 'Enter') {
      toggleMenu();
    }
  }

  menuElement.classList.add('main-header__nav--closed');
  menuToggleElement.classList.remove('main-header__menu-toggle--no-js');
  window.onload = function () {
    menuElement.classList.add('main-header__nav--animation');
  };

  menuToggleElement.addEventListener('click', onToggleMenuClick);
  menuToggleElement.addEventListener('keydown', onToggleMenuPressEnter);
})();
