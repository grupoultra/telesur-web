'use strict';

angular.module('telesurApp')
  .directive("sticky", function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
        if (this.pageYOffset >= 100) {
          element.addClass('fixed');

          angular.element( document.querySelector( 'body' ) ).addClass('fixed');
          angular.element( document.querySelector( '#subfooter' ) ).addClass('bottomFixed');

          var footerHeight = angular.element( document.querySelector( 'footer' ) ).prop('offsetHeight');
          var footerOffset = angular.element( document.querySelector( 'footer' ) ).offset().top;
          var screenHeight = $window.innerHeight;
          var bottomScreenOffset = this.pageYOffset + screenHeight;

          console.log(bottomScreenOffset, footerOffset);
          if (bottomScreenOffset >= footerOffset){
            angular.element( document.querySelector( '#subfooter' ) ).removeClass('bottomFixed');
          }


        } else {
          element.removeClass('fixed');

          angular.element( document.querySelector( 'body' ) ).removeClass('fixed');
          angular.element( document.querySelector( '#subfooter' ) ).removeClass('bottomFixed');
        }
      });
    };
  });
