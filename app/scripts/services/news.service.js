'use strict';

angular.module('telesurApp')
  .factory('newsService', ['ipsumService', function(ipsumService){
    var topNews = [];
    var relatedNews = [];
    var interestNews = [];
    var videoNews = [];
    var active = false;

    var getItem = function(id, longContent, heroImageSize){
      var content = longContent ? ipsumService.paragraphs(6) : ipsumService.words(80);
      return {
        id: id,
        active: active,
        heroImage: 'http://placehold.it/' + heroImageSize,
        subTitle: ipsumService.sentences(1),
        title: ipsumService.words(8),
        content: content,
        views: Math.floor((Math.random() * 10000) + 1),
        link: '/#/news/' + id
      };
    };

    for( var i = 0; i < 6 ; i++){
      active = i === 0 ? true : false;

      topNews.push(getItem(i, false, '934x314'));
      relatedNews.push(getItem(i, true, '934x314'));
      interestNews.push(getItem(i, true, '934x314'));
    }

    for( var i = 0; i < 12 ; i++) {
      videoNews.push(getItem(i, false, '242x160'));
    }

    var onFocusNews = getItem(0, true, true);


    var getNewsLink = function (id){
      return './#/news/' + id;
    };

    return {
      topNews: topNews,
      interestNews: interestNews,
      relatedNews: relatedNews,
      onFocusNews: onFocusNews,
      videoNews: videoNews,
      getNewsLink: getNewsLink
    }

  }]);
