'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('MainCtrl', ['$scope', 'activeDomain', '$state', function ($scope, activeDomain, $state) {
    $scope.activeDomain = activeDomain.name;
    angular.element( document.querySelector( 'body' ) ).removeClass('news');

    $scope.menu = function(){
      return activeDomain.menu;
    };
    $scope.liveSignal = function(){
      return activeDomain.liveSignal;
    };

    $scope.isActive = function(domainName){
      if(activeDomain.name === domainName){
        return true;
      }
    };
  }]);
