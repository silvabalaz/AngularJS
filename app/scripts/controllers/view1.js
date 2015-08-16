 'use strict';
 
A.controller("SearchCtrl", function ($scope, $routeParams, $http) {
        
        $scope.place = $routeParams.place;
        
      
        $http.get("data/places.json").success(function (results) {
            
            $scope.places = results.data;  
          }




function initialize() {

  var markers = [];

  var map = new google.maps.Map(document.getElementById('map'), {

    mapTypeId: google.maps.MapTypeId.ROADMAP

  });

  var defaultBounds = new google.maps.LatLngBounds(
    //Zagreb
      new google.maps.LatLng(45.812897, 15.97706),
      new google.maps.LatLng(45.5000, 15.98000));

  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input =(document.getElementById('SearchPlace'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var searchBox = new google.maps.places.SearchBox((input));
  google.maps.event.addListener(searchBox, 'places_changed', function() {
  var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(15, 15),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17,34),
        scaledSize: new google.maps.Size(5, 5)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
 
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

  google.maps.event.addDomListener(window, 'load', initialize);


});
