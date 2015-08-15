'use strict';





A.controller("DropdownFilter", function($scope) {
            

        $scope.place = [
        
          {
            text: 'restoran',
            value: '1'
          },
          {
            text: 'kafic',
            value: '2'
          
          },
          
          {
            text: 'kino',
            value: '3'
          }
        
        ];
        $scope.selected = {}; 
          });

A.controller("TextFilter", function($scope){});
A.controller("WishList", function($scope){});

A.controller("SearchCtrl", function ($scope, $routeParams, $http) {
        
        $scope.place = $routeParams.place;
        
      
        $http.get("data/places.json").success(function (results) {
            
            $scope.places = results.data;

     


        });

/*
// optional if you want to modify defaults
A.config(function(ngGPlacesAPIProvider){
  ngGPlacesAPIProvider.setDefaults({
    radius:500
  });
});

A.controller('ngGPlaces',function($scope,ngGPlacesAPI){

  $scope.details = ngGPlacesAPI.placeDetails({reference:"really_long_reference_id"}).then(
    function (data) {
      return data;
    });

  $scope.data = ngGPlacesAPI.nearbySearch({latitude:45.812897, longitude:15.97706}).then(
    function(data){
      return data;
    });
});

*/
app.service('Map', function($q) {
    
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
    
    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }
    
});

A.controller('newPlaceCtrl', function($scope, Map) {
    
    $scope.place = {};
    
    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
                $scope.place.lat = res.geometry.location.lat();
                $scope.place.lng = res.geometry.location.lng();
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    
    $scope.send = function() {
        alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);    
    }
    
    Map.init();
});