(function () {
  const icon = {
    WIDTH: 56,
    HEIGHT: 52
  }

  if (innerWidth >= 768) {
    icon.WIDTH = 124;
    icon.HEIGHT = 106;
  }

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [59.93825746, 30.32295280],
      zoom: 16,
      controls: []
    });

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #ffffff; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([59.93825746, 30.32295280], {}, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [icon.WIDTH, icon.HEIGHT],
      iconImageOffset: [0 - (icon.WIDTH / 2), -icon.HEIGHT],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects
      .add(myPlacemarkWithContent);

    myMap.behaviors
      .disable(["scrollZoom"]);
  }
})();
