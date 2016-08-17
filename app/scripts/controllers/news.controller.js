'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('NewsCtrl', ['$scope', 'newsService', function ($scope, newsService) {

    angular.element( document.querySelector( 'body' ) ).addClass('news');
    angular.element( document.querySelector( '#logical-container' ) ).addClass('height100pc');

    $scope.onFocusNews = newsService.onFocusNews;
    $scope.relatedNews = newsService.relatedNews;
    $scope.interestNews = newsService.interestNews;

    $scope.changeNews = function(id){
      $scope.onFocusNews.active = false;
      $scope.onFocusNews = $scope.news[id];
      $scope.news[id].active = true;
    };
  }]);

