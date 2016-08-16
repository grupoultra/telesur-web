'use strict';

/**
 * @ngdoc function
 * @name telesurApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the telesurApp
 */
angular.module('telesurApp')
  .controller('NewsCtrl', ['$scope', function ($scope) {

    angular.element( document.querySelector( 'body' ) ).addClass('news');
    angular.element( document.querySelector( '#logical-container' ) ).addClass('height100pc');

    $scope.onFocusNews = {
      heroImage: 'http://placehold.it/934x314',
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, id totam.',
      title: 'Asperiores commodi eum ex nisi numquam quam tempora. Enim eum, vel!',
      content: '<p><b>Eu nisi occaecat commodo culpa occaecat.</b></p></br> Lorem ullamco occaecat amet nostrud nisi enim ipsum cillum veniam adipisicing consectetur non et ad. Nisi tempor eu ullamco aliqua aliquip ex ex Lorem sit. Et nulla labore excepteur non ipsum exercitation pariatur ea velit voluptate est aute esse nulla. Enim culpa sunt ex id irure ex ullamco deserunt veniam nisi esse amet cupidatat minim. Pariatur commodo sit sit aliquip nulla sunt.</p></br>    <p>Nisi ad tempor occaecat est consequat fugiat velit aliqua. In reprehenderit excepteur exercitation fugiat esse reprehenderit fugiat esse nulla. Cillum ex anim occaecat sunt mollit ea nisi ipsum adipisicing. Mollit laboris adipisicing esse magna adipisicing minim. Exercitation ex velit culpa voluptate. Ad cupidatat pariatur incididunt cupidatat consectetur tempor anim dolor adipisicing incididunt aute culpa tempor.</p></br>  <p>Nisi ad tempor occaecat est consequat fugiat velit aliqua. In reprehenderit excepteur exercitation fugiat esse reprehenderit fugiat esse nulla. Cillum ex anim occaecat sunt mollit ea nisi ipsum adipisicing. Mollit laboris adipisicing esse magna adipisicing minim. Exercitation ex velit culpa voluptate. Ad cupidatat pariatur incididunt cupidatat consectetur tempor anim dolor adipisicing incididunt aute culpa tempor.</p></br>  <p>Nisi ad tempor occaecat est consequat fugiat velit aliqua. In reprehenderit excepteur exercitation fugiat esse reprehenderit fugiat esse nulla. Cillum ex anim occaecat sunt mollit ea nisi ipsum adipisicing. Mollit laboris adipisicing esse magna adipisicing minim. Exercitation ex velit culpa voluptate. Ad cupidatat pariatur incididunt cupidatat consectetur tempor anim dolor adipisicing incididunt aute culpa tempor.</p></br>  <p>Nisi ad tempor occaecat est consequat fugiat velit aliqua. In reprehenderit excepteur exercitation fugiat esse reprehenderit fugiat esse nulla. Cillum ex anim occaecat sunt mollit ea nisi ipsum adipisicing. Mollit laboris adipisicing esse magna adipisicing minim. Exercitation ex velit culpa voluptate. Ad cupidatat pariatur incididunt cupidatat consectetur tempor anim dolor adipisicing incididunt aute culpa tempor.</p></br>    <p>Amet quis adipisicing consectetur exercitation quis mollit. Deserunt reprehenderit mollit Lorem pariatur irure commodo veniam sunt nisi amet. Adipisicing officia do mollit incididunt occaecat quis sit. Incididunt sunt veniam voluptate sit minim consequat adipisicing adipisicing dolore labore nostrud aliqua deserunt. Duis laboris sit labore enim mollit ex excepteur sunt veniam commodo. Velit in elit ullamco cillum in minim aliqua veniam labore occaecat aute sint et. Mollit tempor velit occaecat ullamco et consequat amet irure.</p></br>    <p>Adipisicing fugiat ex ea consequat nostrud cupidatat excepteur commodo magna incididunt minim sint. Excepteur esse nostrud reprehenderit est. Culpa deserunt officia ullamco veniam. Nulla proident dolore enim laboris mollit quis aliqua. Mollit consequat cillum do eu dolor.</p></br>    '
    };

    $scope.relatedNews = [
      { link: '#', active: true, title: 'Sint labore voluptate esse cupidatat consectetur minim ut in deserunt'},
      { link: '#', active: false, title: 'Exercitation nostrud excepteur ad magna culpa quis do enim culpa'},
      { link: '#', active: false, title: 'Sit commodo elit nulla veniam incididunt consectetur veniam labore sint'},
      { link: '#', active: false, title: 'Velit excepteur anim eu aliquip cillum in non culpa mollit'},
      { link: '#', active: false, title: 'Tempor anim in qui esse consectetur culpa mollit ad minim'},
      { link: '#', active: false, title: 'Aute cillum Lorem reprehenderit occaecat fugiat sint nisi sint nostrud'}
    ];
    $scope.interestNews = [
      { link: '#', title: 'Sint labore voluptate esse cupidatat consectetur minim ut in deserunt'},
      { link: '#', title: 'Exercitation nostrud excepteur ad magna culpa quis do enim culpa'},
      { link: '#', title: 'Sit commodo elit nulla veniam incididunt consectetur veniam labore sint'},
      { link: '#', title: 'Velit excepteur anim eu aliquip cillum in non culpa mollit'},
      { link: '#', title: 'Tempor anim in qui esse consectetur culpa mollit ad minim'},
      { link: '#', title: 'Aute cillum Lorem reprehenderit occaecat fugiat sint nisi sint nostrud'}
    ];
  }]);

