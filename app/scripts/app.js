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
    'slick',
    'ipsum'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/explore");

    $stateProvider
      .state('root',{
        url: '',
        abstract: true,
        views: {
          'header':{
            templateUrl: 'views/partials/header.html',
            controller: 'HeaderCtrl'
          },
          'header-advertisement':{
            templateUrl: 'views/partials/header-advertisement.html'
          },
          'homeNewsContainer': {
            templateUrl: 'views/partials/home-news-container.html',
            controller: 'MainCtrl'
          },
          'footer':{
            templateUrl: 'views/partials/footer.html'
          },
          'subfooter':{
            templateUrl: 'views/partials/subfooter.html'
          }
        }
      })
      .state('root.explore', {
        url: '/explore',
        views: {
          'domainContainer@': {
            templateUrl: 'views/partials/explore-domain.html',
            controller: 'ExploreDomainCtrl'
          }
        }
      })
      .state('root.vea', {
        url: '/vea',
        views: {
          'domainContainer@': {
            templateUrl: 'views/partials/vea-domain.html',
            controller: 'VeaDomainCtrl'
          }
        }
      })
      .state('root.participe', {
        url: '/participe',
        views: {
          'domainContainer@': {
            templateUrl: 'views/partials/participe-domain.html',
            controller: 'ParticipeDomainCtrl'
          }
        }
      })
      .state('root.mitelesur', {
        url: '/mitelesur',
        views: {
          'domainContainer@': {
            templateUrl: 'views/partials/mitelesur-domain.html',
            controller: 'MitelesurDomainCtrl'
          }
        }
      })
      .state('root.news', {
        url: '/news/:id',
        views: {
          'header-advertisement@': {},
          'homeNewsContainer@': {},
          'container@': {
            templateUrl: 'views/news.html',
            controller: 'NewsCtrl'
          }
        }
      });
  });
