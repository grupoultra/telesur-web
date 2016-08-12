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
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'slick'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('root',{
        url: '',
        abstract: true,
        views: {
          'header':{
            templateUrl: 'views/partials/header.html',
            controller: 'HeaderCtrl'
          },
          'footer':{
            templateUrl: 'views/partials/footer.html',
          },
          'subfooter':{
            templateUrl: 'views/partials/subfooter.html',
          }
        }
      })
      .state('root.home', {
        url: '/',
        views: {
          'container@': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('root.news', {
        url: '/news/:id',
        views: {
          'container@': {
            templateUrl: 'views/news.html',
            controller: 'NewsCtrl'
          }
        }
      });
  });
