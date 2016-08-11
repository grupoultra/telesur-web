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
    $scope.activeDomain = activeDomain.name;

    // $scope.isActive = function(domainName){
    //   if(activeDomain.name === domainName){
    //     return 'active';
    //   }
    // };

    $scope.toggleMenu = function(){
      activeDomain.toggleMenu();
    };
    $scope.toggleLiveSignal = function(){
      activeDomain.toggleLiveSignal();
    };

    $scope.changeDomain = function(domainName){
      activeDomain.change(domainName);
    };

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
