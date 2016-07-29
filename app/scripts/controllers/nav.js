'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('NavCtrl', ['$scope', 'activeDomain', function ($scope, activeDomain) {
    $scope.isActive = function(domainName){
      if(activeDomain.name === domainName){
        return 'active';
      }
    };

    $scope.toggleMenu = function(){
      activeDomain.toggleMenu();
    };
    $scope.toggleLiveSignal = function(){
      activeDomain.toggleLiveSignal();
    };

    $scope.changeDomain = function(domainName){
      activeDomain.change(domainName);
    };
  }]);
