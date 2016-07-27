'use strict';

angular.module('telesurApp')
  .factory('activeDomain', function(){
    var domain = {};

    domain.name = 'explore';

    domain.change = function(domainName){
      domain.name = domainName;
    };

    return domain;
  });
