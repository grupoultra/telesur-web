'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('HeaderCtrl', ['$scope', 'activeDomain', '$state', function ($scope, activeDomain, $state) {
    var checkActiveDomain = function(){
      $scope.menuSections = [
        { name: 'Explore', domain: 'explore', active: ($state.current.name === 'root.explore') ? 'active' : '' },
        { name: 'Vea', domain: 'vea', active: ($state.current.name === 'root.vea') ? 'active' : '' },
        { name: 'Participe', domain: 'participe', active: ($state.current.name === 'root.participe') ? 'active' : '' },
        { name: 'Mi Telesur', domain: 'mitelesur', active: ($state.current.name === 'root.mitelesur') ? 'active' : '' }
      ];
    };

    checkActiveDomain();

    $scope.toggleMenu = function(){
      activeDomain.toggleMenu();
    };
    $scope.toggleLiveSignal = function(){
      activeDomain.toggleLiveSignal();
    };

    $scope.changeDomain = function(domainName){
      $state.go('root.'+domainName)
        .then(function(){
          checkActiveDomain();
        });
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
