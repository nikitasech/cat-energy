(function () {
  var slider = window.slider;

  var demoElement = document.querySelector('.demo');
  var sliderElement = demoElement.querySelector('.demo__slider');
  var sliderPinElement = sliderElement.querySelector('.slider__button');
  var sliderToogleLeft = sliderElement.querySelector('.slider__toggle--left');
  var sliderToogleRight = sliderElement.querySelector('.slider__toggle--right');

  function demoSlid(percent) {
    demoBeforeImgElement = demoElement.querySelector('.demo__img-container--before');
    demoAfterImgElement = demoElement.querySelector('.demo__img-container--after');
    var pictureWidth = 100 - percent;
    demoBeforeImgElement.style.width = `${pictureWidth}%`;
  }

  function zeroizeDemo() {
    var beforeImgElement = demoElement.querySelector('.demo__img-container--before');
    beforeImgElement.style.transition = `width ease-in-out 0.4s`;

    slider.zeroizePin(sliderElement, demoSlid);
    setTimeout(function () {
      beforeImgElement.style.transition = `none`;
    }, 400);
  }

  function fillDemo() {
    var beforeImgElement = demoElement.querySelector('.demo__img-container--before');
    beforeImgElement.style.transition = `width ease-in-out 0.4s`;

    slider.fillPin(sliderElement, demoSlid);
    setTimeout(function () {
      beforeImgElement.style.transition = `none`;
    }, 400);
  }

  function onPinMove(evt) {
    evt.preventDefault();

    if (innerWidth >= 768) {
      slider.movePin(evt, sliderElement, demoSlid);
    } else {
      slider.switchPin(sliderElement, zeroizeDemo, fillDemo);
    }


  }

  function onLeftToggleClick(evt) {
    evt.preventDefault();

    zeroizeDemo();
  }

  function onLeftTogglePressEnter(evt) {
    evt.preventDefault();

    if (evt.code === 'Enter') {
      zeroizeDemo();
    }
  }

  function onRightToggleClick(evt) {
    evt.preventDefault();

    fillDemo();
  }

  function onRightTogglePressEnter(evt) {
    evt.preventDefault();

    if (evt.code === 'Enter') {
      fillDemo();
    }
  }

  sliderPinElement.addEventListener('mousedown', onPinMove);
  sliderToogleLeft.addEventListener('click', onLeftToggleClick);
  sliderToogleRight.addEventListener('click', onRightToggleClick);
  sliderToogleLeft.addEventListener('keyup', onLeftTogglePressEnter);
  sliderToogleRight.addEventListener('keyup', onRightTogglePressEnter);
})();
