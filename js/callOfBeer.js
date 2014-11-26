// js/callOfBeer.js
'use strict';


/**
 * Déclaration de l'application callOfBeerApp
 */
var callOfBeerApp = angular.module('callOfBeerApp', [
    // Dépendances du "module"
    'mapCob'
]);


/**
 * Déclaration du module events
 */
var mapMod = angular.module('mapCob',['leaflet-directive']);

mapMod.controller("mapCtrl", [ "$scope", '$http', function($scope, $http) {
	$scope.center = {
        lat: 46.25,
        lng: 2.1,
        zoom: 6
    };

    var marquers = $http.get('http://api.callofbeer.com/events?topLat=45&topLon=-1&botLat=44&botLon=0').success(successCallback);

    var successCallback = function(data, status, headers, config) {
    	console.log(data);
    }
}]);