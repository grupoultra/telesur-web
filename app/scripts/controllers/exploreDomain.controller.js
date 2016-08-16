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

    // content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br> Lorem ullamco occaecat amet nostrud nisi enim ipsum cillum veniam adipisicing consectetur non et ad. Nisi tempor eu ullamco aliqua aliquip ex ex Lorem sit. Et nulla labore excepteur non ipsum exercitation pariatur ea velit voluptate est aute esse nulla. Enim culpa sunt ex id irure ex ullamco deserunt veniam nisi esse amet cupidatat minim. Pariatur commodo sit sit aliquip nulla sunt.</p></br>    <p>Nisi ad tempor occaecat est consequat fugiat velit aliqua. In reprehenderit excepteur exercitation fugiat esse reprehenderit fugiat esse nulla. Cillum ex anim occaecat sunt mollit ea nisi ipsum adipisicing. Mollit laboris adipisicing esse magna adipisicing minim. Exercitation ex velit culpa voluptate. Ad cupidatat pariatur incididunt cupidatat consectetur tempor anim dolor adipisicing incididunt aute culpa tempor.</p></br>    <p>Amet quis adipisicing consectetur exercitation quis mollit. Deserunt reprehenderit mollit Lorem pariatur irure commodo veniam sunt nisi amet. Adipisicing officia do mollit incididunt occaecat quis sit. Incididunt sunt veniam voluptate sit minim consequat adipisicing adipisicing dolore labore nostrud aliqua deserunt. Duis laboris sit labore enim mollit ex excepteur sunt veniam commodo. Velit in elit ullamco cillum in minim aliqua veniam labore occaecat aute sint et. Mollit tempor velit occaecat ullamco et consequat amet irure.</p></br>    <p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    '

    $scope.changeNews = function(id){
      $scope.onFocusNews = $scope.news[id];
    };
  }]);
