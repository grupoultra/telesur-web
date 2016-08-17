/**
 * Created by alexis on 8/15/16.
 */

'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:ExploreDomainCtrl
 * @description
 * # ExploreDomainCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('ExploreDomainCtrl', ['$scope', 'newsService', function ($scope, newsService) {


    $scope.advertisement = {
      imageLink: "http://placehold.it/320x105"
    };

    $scope.getNewsLink = function (id){
      return './#/news/' + id;
    };

    $scope.topNews = newsService.topNews;

    $scope.onFocusNews = $scope.topNews[0];

    $scope.changeNews = function(id){
      $scope.onFocusNews.active = false;
      $scope.onFocusNews = $scope.topNews[id];
      $scope.topNews[id].active = true;
    };
  }]);
