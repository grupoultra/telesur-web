'use strict';

angular.module('telesurApp')
  .factory('activeDomain', function(){
    var domain = {};

    domain.liveSignal = false;
    domain.name = 'explore';

    domain.toggleLiveSignal = function(){
      domain.liveSignal = !domain.liveSignal;
    };
    domain.change = function(domainName){
      domain.name = domainName;
    };

    return domain;
  });
