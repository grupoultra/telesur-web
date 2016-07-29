'use strict';

angular.module('telesurApp')
  .factory('activeDomain', function(){
    var domain = {};

    domain.menu = false;
    domain.liveSignal = false;
    domain.name = 'explore';

    domain.toggleMenu = function(){
      domain.liveSignal = false;
      domain.menu = !domain.menu;
    };

    domain.toggleLiveSignal = function(){
      domain.menu = false;
      domain.liveSignal = !domain.liveSignal;
    };
    domain.change = function(domainName){
      domain.name = domainName;
    };

    return domain;
  });
