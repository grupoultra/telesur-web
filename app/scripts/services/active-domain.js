'use strict';

angular.module('telesurApp')
  .factory('activeDomain', function(){
    var domain = {};

    domain.name = 'mitelesur';

    domain.change = function(domainName){
      domain.name = domainName;
    };

    return domain;
  });
