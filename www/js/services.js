'use strict';

var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY',
  function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  var weatherResource = $resource(url, {
    callback: 'JSON_CALLBACK',
  }, {
    get: {
      method: 'JSONP'
    }
  });

  return {
    //getAtLocation: function(lat, lng) {
    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    }
  }
}];

angular.module('starter.services', ['ngResource'])
.factory('Cities', function() {
var cities = [
    { id: 0, name: 'Marietta, GA', lat:33.9592 , lgn: 84.4552},
    { id: 1, name: 'Montclair, NJ' ,lat: 40.8332, lgn: 74.1996 },
    { id: 2, name: 'London' ,lat:51.5072 , lgn: 1.1275 },
    { id: 3, name: 'Los Angeles' ,lat: 33.8798 , lgn: 118.3912 },
    { id: 4, name: 'El Paso' ,lat: 31.8287 , lgn:106.5459  },
    { id: 5, name: 'Espanola, NJ' ,lat:35.9628 , lgn: 106.0637 },
    { id: 6, name: 'Phnom Penh' ,lat:11.9794 , lgn: 104.8787 }
  ];

  return {
    all: function() {
      return cities;
    },
    get: function(cityId) {
      // Simple index lookup
      return cities[cityId];
    }
  }
}).
factory('DataStore', function() {
    //create datastore with default values
    var DataStore = {
        city:       'Montclair',
        latitude:   40.8332,
        longitude:  74.1996 };

    DataStore.setCity = function (value) {
       DataStore.city = value;
    };

    DataStore.setLatitude = function (value) {
       DataStore.longitude = value;
    };

    DataStore.setLongitude = function (value) {
       DataStore.longitude = value;
    };

    return DataStore;
})
.factory('Weather', forecastioWeather);
