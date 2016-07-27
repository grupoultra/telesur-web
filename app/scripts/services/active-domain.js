'use strict';

angular.module('telesurApp')
  .factory('activeDomain', function(){
    var domain = {};

    domain.name = 'participe';

    domain.change = function(domainName){
      domain.name = domainName;
    };

    return domain;
  });
