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
  .controller('ExploreDomainCtrl', ['$scope', function ($scope) {


    $scope.advertisement = {
      imageLink: "http://placehold.it/320x105"
    };

    $scope.getNewsLink = function (id){
      return './#/news/' + id;
    };

    $scope.news = [
      {
        active: true,
        id: 0,
        heroImage: 'http://placehold.it/934x314',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
        title: 'Tempor anim in qui esse consectetur culpa mollit ad minim',
        content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br><p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    ',
        views: '11.356',
        link: '/#/news/4'
      },
      {
        id: 1,
        heroImage: 'http://placehold.it/934x314',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
        title: 'Sint labore voluptate esse cupidatat consectetur minim ut in deserunt',
        content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br><p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    ',
        views: '11.356',
        link: '/#/news/4'
      },
      {
        id: 2,
        heroImage: 'http://placehold.it/934x314',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
        title: 'Exercitation nostrud excepteur ad magna culpa quis do enim culpa',
        content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br><p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    ',
        views: '11.356',
        link: '/#/news/4'
      },
      {
        id: 3,
        heroImage: 'http://placehold.it/934x314',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
        title: 'Sit commodo elit nulla veniam incididunt consectetur veniam labore sint',
        content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br><p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    ',
        views: '11.356',
        link: '/#/news/4'
      },
      {
        id: 4,
        heroImage: 'http://placehold.it/934x314',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
        title: 'Velit excepteur anim eu aliquip cillum in non culpa mollit',
        content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br><p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    ',
        views: '11.356',
        link: '/#/news/4'
      },
      {
        id: 5,
        heroImage: 'http://placehold.it/934x314',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
        title: 'Asperiores commodi eum ex nisi numquam quam tempora. Enim eum, vel!',
        content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br><p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    ',
        views: '11.356',
        link: '/#/news/4'
      }
    ];


    $scope.onFocusNews = $scope.news[0];

    $scope.changeNews = function(id){
      $scope.onFocusNews.active = false;
      $scope.onFocusNews = $scope.news[id];
      $scope.news[id].active = true;
    };
  }]);
