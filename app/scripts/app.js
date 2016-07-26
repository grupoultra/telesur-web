'use strict';

/**
 * @ngdoc overview
 * @name telesurApp
 * @description
 * # telesurApp
 *
 * Main module of the application.
 */
angular
  .module('telesurApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
