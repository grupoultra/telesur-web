'use strict';

angular.module('telesurApp')
  .factory('newsService', ['ipsumService', function(ipsumService){
    var topNews = [];
    var active = false;

    for( var i = 0; i < 6 ; i++){
      active = i === 0 ? true : false;

      topNews.push({
        id: i,
        active: active,
        heroImage: 'http://placehold.it/934x314',
        subTitle: ipsumService.sentences(1),
        title: ipsumService.words(8),
        content: ipsumService.words(80),
        views: Math.floor((Math.random() * 10000) + 1),
        link: '/#/news/' + i
      })
    }

    return {
      topNews: topNews
    }

  }]);
