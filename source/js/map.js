(function () {
  const PIN_COORDIATES = [59.93825746, 30.32295280];
  let centerMapCoordinates = [59.93825746, 30.32295280];

  const IconSize = {
    WIDTH: 56,
    HEIGHT: 52
  }

  const DisplayWidth = {
    TABLET: 768,
    DESKTOP: 1440
  }

  if (innerWidth >= DisplayWidth.TABLET) {
    IconSize.WIDTH = 124;
    IconSize.HEIGHT = 106;
  }

  if (innerWidth >= DisplayWidth.DESKTOP) {
    centerMapCoordinates = [59.938667, 30.317824];
  }

  ymaps.ready(init);
  function init(){
    const myMap = new ymaps.Map('map', {
      center: centerMapCoordinates,
      zoom: 16,
      controls: []
    });

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #ffffff; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark(PIN_COORDIATES, {}, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [IconSize.WIDTH, IconSize.HEIGHT],
      iconImageOffset: [0 - (IconSize.WIDTH / 2), -IconSize.HEIGHT],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
      .add(myPlacemarkWithContent);

    myMap.behaviors
      .disable(['scrollZoom']);
  }
})();
