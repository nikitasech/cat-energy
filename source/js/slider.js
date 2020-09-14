(function () {
  var BarPadding = {
    LEFT: 5,
    RIGHT: 5,
  };

  function moveSliderPin(evt, sliderElement, callback) {
    var sliderBarElement = sliderElement.querySelector('.slider__bar');
    var sliderPinElement = sliderBarElement.querySelector('.slider__button');

    var SliderLimit = {
      LEFT: 0,
      RIGHT: sliderBarElement.offsetWidth - sliderPinElement.offsetWidth,
    };

    var mouseCoordinateX = evt.clientX;
    var pinShift = mouseCoordinateX - evt.currentTarget.getBoundingClientRect().left;
    var barPosition = sliderBarElement.getBoundingClientRect();

    function onPinMove(evtMove) {
      evtMove.preventDefault();

      // Обновим координаты мыши
      mouseCoordinateX = evtMove.clientX;

      var pinCoordinateX = Math.max(
        SliderLimit.LEFT + pinShift,
        Math.min(
          SliderLimit.RIGHT + pinShift,
          mouseCoordinateX - barPosition.left
        )
      ) - pinShift;

      sliderPinElement.style.marginLeft = `${pinCoordinateX}px`;
      var pinPercent = 100 / (sliderBarElement.offsetWidth - sliderPinElement.offsetWidth) * pinCoordinateX;
      callback(pinPercent);
    }

    function onPinMouseUp() {
      document.removeEventListener('mousemove', onPinMove);
      document.removeEventListener('mouseup', onPinMouseUp);
    }

    document.addEventListener('mousemove', onPinMove);
    document.addEventListener('mouseup', onPinMouseUp);
  }

  function switchPin(sliderElement, zeroizeCallback, fillCallback) {
    var sliderPinElement = sliderElement.querySelector('.slider__button');

    if (sliderPinElement.offsetLeft === BarPadding.LEFT) {
      fillPin(sliderElement, fillCallback);
    } else {
      zeroizePin(sliderElement, zeroizeCallback);
    }
  }

  function zeroizePin(sliderElement, callback) {
    var sliderPinElement = sliderElement.querySelector('.slider__button');

    sliderPinElement.style.transition = `margin-left ease-in-out 0.4s`;
    sliderPinElement.style.marginLeft = `0`;

    setTimeout(function () {
      sliderPinElement.style.transition = `none`;
    }, 400);

    callback(0);
  }

  function fillPin(sliderElement, callback) {
    var sliderBarElement = sliderElement.querySelector('.slider__bar');
    var sliderPinElement = sliderBarElement.querySelector('.slider__button');

    sliderPinElement.style.transition = `margin-left ease-in-out 0.4s`;

    if (innerWidth >= 768) {
      sliderPinElement.style.marginLeft = `${sliderBarElement.offsetWidth - sliderPinElement.offsetWidth - 1}px`;
    } else {
      sliderPinElement.style.marginLeft = `${sliderBarElement.offsetWidth - sliderPinElement.offsetWidth - BarPadding.LEFT - BarPadding.RIGHT - 1}px`;
    }

    setTimeout(function () {
      sliderPinElement.style.transition = `none`;
    }, 400);

    callback(100);
  }

  window.slider = {
    movePin: moveSliderPin,
    switchPin: switchPin,
    zeroizePin: zeroizePin,
    fillPin: fillPin
  };
})();
