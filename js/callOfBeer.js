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
var mapMod = angular.module('mapCob',['leaflet-directive', 'ngResource']);

mapMod.controller("mapCtrl", [ "$scope", '$http', '$resource', function($scope, $http, $resource) {
	$scope.center = {
        lat: 46.25,
        lng: 2.1,
        zoom: 6
    };

    navigator.geolocation.getCurrentPosition(function(data){
    	$scope.center.lat = data.coords.latitude;
    	$scope.center.lng = data.coords.longitude;
    	$scope.center.zoom = 14;
    });


    $http.get('http://api.callofbeer.com/events?topLat=45&topLon=-1&botLat=44&botLon=0').success(successCallback);

    function successCallback(data) {
    	console.log(data);
    }
}]);