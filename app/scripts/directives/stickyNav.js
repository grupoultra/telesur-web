'use strict';

angular.module('telesurApp')
  .directive("sticky", function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 100) {
          element.addClass('fixed');

          angular.element( document.querySelector( 'body' ) ).addClass('fixed');
        } else {
          element.removeClass('fixed');

          angular.element( document.querySelector( 'body' ) ).removeClass('fixed');
        }
      });
    };
  });
