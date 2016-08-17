'use strict';

angular.module('telesurApp')
  .factory('newsService', ['ipsumService', function(ipsumService){
    var topNews = [];
    var relatedNews = [];
    var interestNews = [];
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
    for( var i = 0; i < 6 ; i++){
      relatedNews.push({
        id: i,
        active: active,
        heroImage: 'http://placehold.it/934x314',
        subTitle: ipsumService.sentences(1),
        title: ipsumService.words(8),
        content: ipsumService.paragraphs(6),
        views: Math.floor((Math.random() * 10000) + 1),
        link: '/#/news/' + i
      })
      interestNews.push({
        id: i,
        active: active,
        heroImage: 'http://placehold.it/934x314',
        subTitle: ipsumService.sentences(1),
        title: ipsumService.words(8),
        content: ipsumService.paragraphs(6),
        views: Math.floor((Math.random() * 10000) + 1),
        link: '/#/news/' + i
      })
    }

    var onFocusNews = {
      heroImage: 'http://placehold.it/934x314',
      subTitle: ipsumService.sentences(1),
      title: ipsumService.words(8),
      content: ipsumService.paragraphs(6),
      views: Math.floor((Math.random() * 10000) + 1),
    };

    return {
      topNews: topNews,
      interestNews: interestNews,
      relatedNews: relatedNews,
      onFocusNews: onFocusNews
    }

  }]);
