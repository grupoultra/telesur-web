'use strict';

angular.module('telesurApp')
  .factory('newsService', ['ipsumService', function(ipsumService){
    var topNews = [];
    var relatedNews = [];
    var interestNews = [];
    var active = false;

    var getItem = function(id, longContent){
      var content = longContent ? ipsumService.paragraphs(6) : ipsumService.words(80);
      return {
        id: id,
        active: active,
        heroImage: 'http://placehold.it/934x314',
        subTitle: ipsumService.sentences(1),
        title: ipsumService.words(8),
        content: content,
        views: Math.floor((Math.random() * 10000) + 1),
        link: '/#/news/' + id
      };
    };

    for( var i = 0; i < 6 ; i++){
      active = i === 0 ? true : false;

      topNews.push(getItem(i, false));
      relatedNews.push(getItem(i, true));
      interestNews.push(getItem(i, true));
    }

    var onFocusNews = getItem(0, true);

    return {
      topNews: topNews,
      interestNews: interestNews,
      relatedNews: relatedNews,
      onFocusNews: onFocusNews
    }

  }]);
