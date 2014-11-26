// js/callOfBeer.js
'use strict';


/**
 * Déclaration de l'application callOfBeerApp
 */
var callOfBeerApp = angular.module('callOfBeerApp', [
    // Dépendances du "module"
    'events'
]);


/**
 * Déclaration du module events
 */
var mapMod = angular.module('mapCob',['leaflet-directive']);

mapMod.controller("mapCtrl", [ "$scope", function($scope) {
    // Nothing here!
}]);