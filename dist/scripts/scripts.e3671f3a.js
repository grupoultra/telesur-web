"use strict";angular.module("telesurApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router","slick","ipsum"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("root",{url:"","abstract":!0,views:{header:{templateUrl:"views/partials/header.html",controller:"HeaderCtrl"},"header-advertisement":{templateUrl:"views/partials/header-advertisement.html"},footer:{templateUrl:"views/partials/footer.html"},subfooter:{templateUrl:"views/partials/subfooter.html"}}}).state("root.home",{url:"/",views:{"container@":{templateUrl:"views/main.html",controller:"MainCtrl"}}}).state("root.news",{url:"/news/:id",views:{"header-advertisement@":{},"container@":{templateUrl:"views/news.html",controller:"NewsCtrl"}}})}]),angular.module("telesurApp").controller("MainCtrl",["$scope","activeDomain","$state","newsService",function(a,b,c,d){a.activeDomain=b.name,angular.element(document.querySelector("body")).removeClass("news"),a.menu=function(){return b.menu},a.liveSignal=function(){return b.liveSignal},a.videoNews=d.videoNews,a.isActive=function(a){return b.name===a?!0:void 0}}]),angular.module("telesurApp").controller("HeaderCtrl",["$scope","activeDomain","$state",function(a,b,c){a.activeDomain=b.name,a.isHomeState=!0,"root.news"===c.current.name&&(a.isHomeState=!1),a.toggleMenu=function(){b.toggleMenu()},a.toggleLiveSignal=function(){b.toggleLiveSignal()},a.changeDomain=function(a){b.change(a)},a.menu=function(){return b.menu},a.liveSignal=function(){return b.liveSignal},a.isActive=function(a){return b.name===a?!0:void 0}}]),angular.module("telesurApp").controller("NewsCtrl",["$scope","newsService",function(a,b){angular.element(document.querySelector("body")).addClass("news"),angular.element(document.querySelector("#logical-container")).addClass("height100pc"),a.onFocusNews=b.onFocusNews,a.relatedNews=b.relatedNews,a.interestNews=b.interestNews}]),angular.module("telesurApp").controller("ExploreDomainCtrl",["$scope","newsService",function(a,b){a.advertisement={imageLink:"http://placehold.it/320x105"},a.getNewsLink=function(a){return"./#/news/"+a},a.topNews=b.topNews,a.onFocusNews=a.topNews[0],a.changeNews=function(b){a.onFocusNews.active=!1,a.onFocusNews=a.topNews[b],a.topNews[b].active=!0}}]),angular.module("telesurApp").controller("VeaDomainCtrl",["$scope",function(a){}]),angular.module("telesurApp").controller("ParticipeDomainCtrl",["$scope",function(a){}]),angular.module("telesurApp").controller("MitelesurDomainCtrl",["$scope",function(a){}]),angular.module("telesurApp").factory("activeDomain",function(){var a={};return a.menu=!1,a.liveSignal=!1,a.name="explore",a.toggleMenu=function(){a.liveSignal=!1,a.menu=!a.menu},a.toggleLiveSignal=function(){a.menu=!1,a.liveSignal=!a.liveSignal},a.change=function(b){a.name=b},a}),angular.module("telesurApp").factory("newsService",["ipsumService",function(a){for(var b=[],c=[],d=[],e=[],f=!1,g=function(b,c,d){var e=c?a.paragraphs(6):a.words(80);return{id:b,active:f,heroImage:"http://placehold.it/"+d,subTitle:a.sentences(1),title:a.words(8),content:e,views:Math.floor(1e4*Math.random()+1),link:"/#/news/"+b}},h=0;6>h;h++)f=0===h?!0:!1,b.push(g(h,!1,"934x314")),c.push(g(h,!0,"934x314")),d.push(g(h,!0,"934x314"));for(var h=0;12>h;h++)e.push(g(h,!1,"242x160"));var i=g(0,!0,!0),j=function(a){return"./#/news/"+a};return{topNews:b,interestNews:d,relatedNews:c,onFocusNews:i,videoNews:e,getNewsLink:j}}]),angular.module("telesurApp").directive("sticky",["$window",function(a){return function(b,c,d){angular.element(a).bind("scroll",function(){if(this.pageYOffset>=100){c.addClass("fixed"),angular.element(document.querySelector("body")).addClass("fixed"),angular.element(document.querySelector("#subfooter")).addClass("bottomFixed");var b=(angular.element(document.querySelector("footer")).prop("offsetHeight"),angular.element(document.querySelector("footer")).offset().top),d=a.innerHeight,e=this.pageYOffset+d;e>=b&&angular.element(document.querySelector("#subfooter")).removeClass("bottomFixed")}else c.removeClass("fixed"),angular.element(document.querySelector("body")).removeClass("fixed"),angular.element(document.querySelector("#subfooter")).removeClass("bottomFixed")})}}]),angular.module("telesurApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="container" ng-click="check()"> <ng-include src="\'views/partials/explore-domain.html\'" ng-controller="ExploreDomainCtrl" ng-if="isActive(\'explore\')"></ng-include> <ng-include src="\'views/partials/vea-domain.html\'" ng-controller="VeaDomainCtrl" ng-if="isActive(\'vea\')"></ng-include> <ng-include src="\'views/partials/participe-domain.html\'" ng-controller="ParticipeDomainCtrl" ng-if="isActive(\'participe\')"></ng-include> <ng-include src="\'views/partials/mitelesur-domain.html\'" ng-controller="MitelesurDomainCtrl" ng-if="isActive(\'mitelesur\')"></ng-include> </div> <div class="container"> <ng-include src="\'views/partials/videos-section.html\'"></ng-include> <ng-include src="\'views/partials/sections.html\'"></ng-include> </div>'),a.put("views/news.html",'<div class="container news-view-container height95pc"> <div class="news-view height100pc"> <div class="news-container height100pc justScrollY"> <div class="news-header"> <div class="metadata-container"> <div class="category-container">Noticias > América Latina > Política </div> <div class="date-author-container"> Publicado por: Autor del Artículo - 14 de junio de 2016, a las 11:45am</div> </div> <div class="image-container"> <img src="http://placehold.it/934x314" alt=""> </div> <div class="title-container"> <div class="subtitle">{{onFocusNews.subTitle}}</div> <div class="title">{{onFocusNews.title}}</div> </div> </div> <div class="row content"> <div class="col-sm-12"> <div class="visualizations pull-right">11.326 visualizaciones</div> </div> <div class="col-sm-9"> <div class="news-content"> <div class="clearfix"></div> <div class="content" ng-bind-html="onFocusNews.content"></div> </div> </div> <div class="col-sm-3"> <div class="share-new"> <span>Comparta esta noticia: </span> <div class="socials-container"> <img src="http://placehold.it/16x16" alt="" ng-repeat="n in [0,1,2,3,4,5]"> </div> </div> <div class="comments-container"> <form role="form"> <div class="form-group"> <textarea type="email" class="form-control" id="email"></textarea> <span>Para poder comentar, deberá iniciar su sesión en telesurtv.net</span> </div> </form> </div> </div> </div> <div class="news-container-footer row"> <div class="col-sm-1 read-later text-center"> <p><span class="glyphicon glyphicon-asterisk"></span></p> <p class="text">Leer luego</p> </div> <div class="col-sm-6 more-articles"> <p>Leer mas articulos por: <a href="">Autor del articulo</a></p> <p>Ver mas articulos de: <a href="">Politica - America Latina - Venezuela</a></p> </div> <div class="col-sm-3 this-article text-right"> <p>Este articulo tiene 23 comentarios</p> <p>Ha sido compartido 11 veces</p> </div> <div class="col-sm-2 prev-next text-right"> <div class="indicator"> <span class="text">Noticia anterior</span> <span class="glyphicon glyphicon-circle-arrow-up"></span> </div> <div class="indicator"> <span class="text">Proxima noticia</span> <span class="glyphicon glyphicon-circle-arrow-down"></span> </div> </div> </div> </div> <div class="news-sidebar height100pc justScrollY"> <div class="close-window"> <span class="glyphicon glyphicon-remove-circle"></span> Cerrar esta ventana </div> <div class="news-advertisement"> <img src="http://placehold.it/320x105" alt=""> </div> <div class="news-selector"> <div class="selector-header"> Relacionados: </div> <ul> <li ng-class="news.active ? \'active\' : \'\'" ng-repeat="news in relatedNews"> <a href="{{news.link}}">{{news.title}}</a> </li> </ul> </div> <div class="news-selector"> <div class="selector-header"> De su interés: </div> <ul> <li ng-class="news.active ? \'active\' : \'\'" ng-repeat="news in interestNews"> <a href="{{news.link}}">{{news.title}}</a> </li> </ul> </div> </div> <div class="clearfix"></div> </div> <div class="news-sidebar ColPruebas"></div> </div>'),a.put("views/partials/explore-domain.html",'<div class="domain-container explore-domain"> <div class="news-container"> <div class="news-header"> <div class="metadata-container"> <div class="category-container">Noticias > América Latina > Política </div> <div class="date-author-container"> Publicado por: Autor del Artículo - 14 de junio de 2016, a las 11:45am</div> </div> <div class="image-container"> <img src="{{onFocusNews.heroImage}}" alt=""> </div> <div class="title-container"> <div class="subtitle">{{onFocusNews.subTitle}}</div> <div class="title">{{onFocusNews.title}}</div> </div> </div> <div class="news-content"> <div class="visualizations pull-right">{{onFocusNews.views}} visualizaciones</div> <div class="clearfix"></div> <div class="content"> <p ng-bind-html="onFocusNews.content"></p> <a ng-href="{{getNewsLink(onFocusNews.id)}}"> Continuar leyendo... </a> </div> </div> </div> <div class="news-sidebar"> <div class="news-selector"> <ul> <li ng-click="changeNews(news.id)" ng-class="news.active ? \'active\' : \'\'" ng-repeat="news in topNews"> <a>{{news.title}}</a> </li> </ul> </div> <div class="news-advertisement"> <img src="{{advertisement.imageLink}}" alt=""> </div> </div> <div class="clearfix"></div> </div>'),a.put("views/partials/footer.html",'<div class="container"> <footer> <section class="logo text-center"> <div class="logo-image"> <img src="http://placehold.it/44x44" alt=""> </div> </section> <section class="footer-links"> <h5>Sobre teleSUR</h5> <ul> <li><a href="#">Acerca de teleSUR</a></li> <li><a href="#">Contactos</a></li> <li><a href="#">Equipo</a></li> <li><a href="#">Empleos</a></li> <li><a href="#">Terminos de uso</a></li> <li><a href="#">Aplicaciones</a></li> <li><a href="#">Cobertura satelital</a></li> <li><a href="#">RSS</a></li> <li><a href="#">Contratación pública</a></li> </ul> </section> <section class="footer-links"> <h5>Canales</h5> <ul> <li><a href="#">Latinoamérica</a></li> <li><a href="#">Vuelta al mundo</a></li> <li><a href="#">Deportes</a></li> <li><a href="#">Cultura</a></li> <li><a href="#">Opinión</a></li> <li><a href="#">Programación</a></li> </ul> </section> <section class="footer-links"> <h5>Servicios</h5> <ul> <li><a href="#">Catálogo de servicios</a></li> <li><a href="#">Multimedia</a></li> <li><a href="#">Blog</a></li> <li><a href="#">Videos</a></li> <li><a href="#">TV en vivo</a></li> </ul> <h5 class="language-switch">teleSUR en inglés</h5> </section> <section class="suscription-socials"> <h5>Suscribirse a nuestro Boletín de Noticias</h5> <div class="search"> <form role="form"> <div class="form-group"> <input type="email" class="form-control" id="email"> </div> <span class="suscribe-cta pull-right">Suscribirse</span> <div class="clearfix"></div> </form> </div> <h5>Nuestra presencia en las Redes Sociales</h5> <div class="socials-container"> <img src="http://placehold.it/16x16" alt="" ng-repeat="n in [0,1,2,3,4,5]"> </div> <div class="rss-apps"> <div class="rss"> <img src="http://placehold.it/20x20" alt=""> <h5>RSS</h5> </div> <div class="apps"> <img src="http://placehold.it/20x20" alt=""> <h5>Apps</h5> </div> </div> </section> <section class="legal-info"> <p>La nueva Televisión del Sur C.A. (TVSUR)</p> <p>RIF: G-20004500-0</p> </section> <div class="clearfix"></div> </footer> </div>'),a.put("views/partials/header-advertisement.html",'<div class="vertical-advertising text-center"> <img src="http://placehold.it/728x90" alt=""> </div>'),a.put("views/partials/header.html",'<header sticky ng-controller="HeaderCtrl as nav"> <div class="container nav-container"> <section class="header-info"> <div class="logo text-center"> <div class="logo-image text-center"> <a ui-sref="root.home"> <img src="http://placehold.it/44x44" alt=""> </a> </div> <div class="language-switch"><a href="#"> Cambiar a inglés </a></div> </div> <div class="time-weather text-center"> <div class="time"> <p>Martes, 14 de junio</p> </div> <div class="weather"> <span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <span>Caracas. 19 C</span> </div> </div> <div class="session-info text-center"> <img src="http://placehold.it/30x30" class="img-circle" alt=""> <p>Bienvenido(a),</p> <p>Visitante</p> </div> </section> <section class="header-nav"> <ul> <li ng-class="isActive(\'explore\')" ng-click="changeDomain(\'explore\')">Explore</li> <li ng-class="isActive(\'vea\')" ng-click="changeDomain(\'vea\')">Vea</li> <li ng-class="isActive(\'participe\')" ng-click="changeDomain(\'participe\')">Participe</li> <li ng-class="isActive(\'mitelesur\')" ng-click="changeDomain(\'mitelesur\')">Mi teleSUR</li> </ul> </section> <section class="header-extra text-center"> <div class="live-signal" ng-click="toggleLiveSignal()"> <p>Señal en vivo</p> <p>En el aire: Conexión Global</p> </div> <div class="menu-principal" ng-click="toggleMenu()"> <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> <span>Menú Principal</span> </div> <div class="social-search"> <div class="socials-container"> <img src="http://placehold.it/16x16" alt="" ng-repeat="n in [0,1,2,3,4,5]"> </div> <div class="search"> <form role="form"> <div class="form-group"> <i class="glyphicon glyphicon-search"></i> <input type="email" class="form-control" id="email" placeholder="Buscar en teleSUR"> </div> </form> </div> </div> <div class="clearfix"></div> </section> </div> <div class="subnav"> <div class="container"> <div class="breadcrumbs pull-left"> <p>Explorando: Página Inicial > Notícias en destaque</p> </div> <div class="menu-principal pull-right" ng-click="toggleMenu()"> <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> <span>Menú Principal</span> </div> <div class="clearfix"></div> </div> </div> <div class="container"> <div class="subnav-container" ng-if="menu()"> <ng-include src="\'views/partials/subfooter.html\'"></ng-include> <ng-include src="\'views/partials/footer.html\'"></ng-include> </div> <div class="subnav-container" ng-if="liveSignal()"> <ng-include src="\'views/partials/live-signal.html\'"></ng-include> </div> </div> </header>'),a.put("views/partials/live-signal.html",'<div class="live-signal-container"> <div class="selector-container text-center"> <ul class="text-right"> <li class="active"><a href="">Señal principal en vivo</a></li> <li><a href="">Señal en vivo (Audio)</a></li> <li><a href="">Señal en inglés</a></li> <li><a href="">Exclusivos web</a></li> <li><a href="">Programación especial</a></li> </ul> <p>Tambien puede ver nuestra señal en vivo, las 24 horas, en:</p> <img src="http://placehold.it/70x32" alt=""> <p>youtube.com/telesurtv</p> </div> <div class="video-container"> <img src="http://placehold.it/335x250" alt=""> </div> <div class="advertisement"> <img src="http://placehold.it/300x250" alt=""> </div> <div class="clearfix"></div> </div> <div class="clearfix"></div>'),a.put("views/partials/mitelesur-domain.html",'<div class="domain-container mitelesur-domain"> <div class="inner-container"> <div class="mitelesur-section text-center"> <div class="title"> Mi teleSUR</div> <img src="http://placehold.it/75x75" alt="" class="img-circle"> <p>Debe iniciar la sesión de teleSUR para poder guardar sus cambios</p> </div> <div class="preferences-section"> <div class="title">Preferencias Generales</div> <form action=""> <div class="checkbox"> <label><input type="checkbox"> Especificar mi localización</label> </div> <div class="form-group"> <input id="localizacion" type="text" class="disabled" disabled> <label for="localizacion" class="disabled"> Si no suministra una localizacion personalizada, teleSUR utilizará los servicios disponibles para tratar de encontrar su localizacion actual</label> </div> </form> </div> <div class="customize-section"> <div class="title">Personalizar mi contenido</div> <ul class="col-xs-6" style="padding-right: 10px"> <li><label><input type="checkbox">Últimas noticias</label></li> <li><label><input type="checkbox">En destaque</label></li> <li><label><input type="checkbox">América Latina</label></li> <li><label><input type="checkbox">Mundo</label></li> <li><label><input type="checkbox">Economía</label></li> </ul> <ul class="col-xs-6"> <li><label><input type="checkbox">Deportes</label></li> <li><label><input type="checkbox">Cultura</label></li> <li><label><input type="checkbox">Opinión</label></li> <li><label><input type="checkbox">Voces</label></li> <li><label><input type="checkbox">Soy reportero</label></li> </ul> </div> <div class="info-section"> <p>Active o desactive las secciones de la lista que le interesan  Puede re-ordenar las secciones para que aparezcan en el orden que prefiera. Para ello, seleccione y arrastre cada sección para la posición deseada, utilizando el área gris delineada a la izquierda de cada sección.</p> <p>No olvide guardar sus cambios cuando haya terminado de personalizar su teleSUR</p> <a href="" class="footer text-center">Guardar mis cambios</a> </div> <div class="clearfix"></div> </div> </div>'),a.put("views/partials/participe-domain.html",'<div class="domain-container participe-domain"> <div class="participe-section"> <img class="participe-image" src="http://placehold.it/320x70" alt=""> <p> “Ciudadano teleSUR” es una campaña de recaudación de fondos que tiene como objetivo sumar a nuestros seguidores a la tarea de garantizar la democratización de la información y contribuir así con la pluralidad de voces en el concierto internacional. </p> <p> Ser un ciudadano teleSUR te permitirá participar en el financiamiento de nuestra señal a través de un aporte que va desde 1$ hasta la cantidad que decidas. Tu contribución podrá ser como un aporte único o de forma mensual. </p> <a href="" class="sublink">Beneficios</a> <a href="" class="sublink">Términos de uso</a> <a href="" class="sublink">Más información</a> <a href="" class="footer">Quiero ser un ciudadano teleSUR</a> </div> <div class="participe-section"> <h2 class="title">Soy reportero</h2> <div class="items-section"> <div class="reporter-item" ng-repeat="n in [1,2,3]"> <img src="http://placehold.it/120x120" alt=""> <div class="item-info"> <div class="item-title">Lorem ipsum dolor sit amet</div> <div class="metadata"> <div class="author pull-left">John Doe</div> <div class="country pull-right">Venezuela</div> </div> </div> <div class="clearfix"></div> </div> </div> <a href="" class="footer">Coviértete en un reportero</a> </div> <div class="participe-section"> <h2 class="title">Blogs teleSUR</h2> <div class="items-section"> <div class="blog-item" ng-repeat="n in [1,2,3,4,5]"> <img src="http://placehold.it/75x75" alt=""> <div class="item-info"> <div class="item-author"> Lorem ipsum dolor sit amet</div> <ul> <li>Consectetur adipisicing elit. </li> <li>Aliquam culpa dolore dolorum </li> </ul> <div class="perfil pull-right">Perfil del bloguero - Mas artículos</div> </div> <div class="clearfix"></div> </div> </div> <a href="" class="footer">Me gustaría tener un blog en teleSUR</a> </div> <div class="clearfix"></div> </div>'),a.put("views/partials/sections.html",'<div class="section" ng-repeat="n in [0,1,2,3]"> <div class="header"> <div class="pull-left"> <h2>Section {{n}}</h2> <a href="#">Ver todas</a> </div> <div class="pull-right"> <span>Actualizado a las 02:35pm</span> <span>-</span> <a href="#">Actualizar ahora</a> </div> <div class="clearfix"></div> </div> <slick slides-to-show="3" slides-to-scroll="1" arrows="false" variable-width="true" class="section-container"> <div class="section-item"> <img src="http://placehold.it/470x215" alt=""> <div class="section-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div> <div class="section-summary"> Accusamus asperiores corporis earum eligendi enim explicabo id nulla quasi quis vel. At consequatur dolores et magnam, necessitatibus </div> </div> <div class="section-item"> <img src="http://placehold.it/470x215" alt=""> <div class="section-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div> <div class="section-summary"> Accusamus asperiores corporis earum eligendi enim explicabo id nulla quasi quis vel. At consequatur dolores et magnam, necessitatibus </div> </div> <div class="section-item advertisement" style="width: auto"> <img src="http://placehold.it/295x250" alt=""> </div> <div class="section-item"> <img src="http://placehold.it/470x215" alt=""> <div class="section-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div> <div class="section-summary"> Accusamus asperiores corporis earum eligendi enim explicabo id nulla quasi quis vel. At consequatur dolores et magnam, necessitatibus </div> </div> <div class="section-item advertisement" style="width: auto"> <img src="http://placehold.it/295x250" alt=""> </div> <div class="section-item"> <img src="http://placehold.it/470x215" alt=""> <div class="section-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div> <div class="section-summary"> Accusamus asperiores corporis earum eligendi enim explicabo id nulla quasi quis vel. At consequatur dolores et magnam, necessitatibus </div> </div> </slick> </div> <div class="section section-split" ng-repeat="n in [0,1]"> <div class="header"> <div class="pull-left"> <h2>Section splitted {{n}}</h2> <a href="#">Ver todas</a> </div> <div class="pull-right"> <span>Actualizado a las 02:35pm</span> <span>-</span> <a href="#">Actualizar ahora</a> </div> <div class="clearfix"></div> </div> <div class="section-item"> <div class="split" ng-repeat="n in [0,1]"> <img src="http://placehold.it/470x120" alt=""> <div class="section-title">Lorem ipsum dolor sit amet</div> <div class="section-summary"> Accusamus asperiores corporis </div> </div> </div> <div class="section-item advertisement"> <img src="http://placehold.it/295x250" alt=""> </div> <div class="section-item"> <div class="split" ng-repeat="n in [0,1]"> <img src="http://placehold.it/470x120" alt=""> <div class="section-title">Lorem ipsum dolor sit amet </div> <div class="section-summary"> Accusamus asperiores corporis </div> </div> </div> </div>'),a.put("views/partials/subfooter.html",'<div id="subfooter" class="container"> <div class="subfooter"> <ul class="pull-left"> <li><a href="#">América Latina</a></li> <li><a href="#">Mundo</a></li> <li><a href="#">Economía</a></li> <li><a href="#">Deportes</a></li> <li><a href="#">Cultura</a></li> <li><a href="#">Opinión</a></li> <li><a href="#">Voces</a></li> </ul> <ul class="pull-right"> <li><a href="#">Programación</a></li> <li><a href="#">Mi teleSUR</a></li> </ul> <div class="clearfix"></div> </div> </div>'),a.put("views/partials/vea-domain.html",'<div class="domain-container vea-domain"> <div class="main-container"> <div class="left-sidebar"> <div class="domain-title text-center">Videoteca teleSUR</div> <div class="section-selector"> <ul> <li class="active"> <a href="">Noticias</a> </li> <li><a href="#">Entrevistas</a></li> <li><a href="#">Programas</a></li> <li><a href="#">Reportajes</a></li> <li><a href="#">Documentales</a></li> <li><a href="#">Especiales Web</a></li> <li><a href="#">Seriados</a></li> <li><a href="#">Infografias</a></li> <li><a href="#">Corresponsales</a></li> </ul> </div> <div class="search-section"> <form role="form"> <div class="form-group"> <i class="glyphicon glyphicon-search"></i> <input type="email" class="form-control" id="email" placeholder="Buscar en la Vídeoteca"> </div> </form> </div> <div class="share-section"> <p>Comparta este video:</p> <div class="socials-container"> <img src="http://placehold.it/16x16" alt="" ng-repeat="n in [0,1,2,3,4,5]"> </div> <p class="leave-comment">Deje su comentario:</p> </div> </div> <div class="video-container"> <div class="video"> <img src="http://placehold.it/640x460" alt=""> <div class="video-caption"> <p>teleSUR Noticias: Domingo 12/06/2016</p> </div> </div> <div class="video-footer"> <span>Emitido: Domingo, 12 de junio de 2016, 11:30am - Publicado: Domingo, 12 de junio de 2016, 12:43am</span> <a class="pull-right" href="">18 comentarios</a> </div> </div> <div class="clearfix"></div> <div class="comments-container"> <form role="form"> <div class="form-group"> <textarea type="email" class="form-control" id="email"></textarea> <span>Para poder comentar, deberá iniciar su sesión en telesurtv.net</span> </div> </form> </div> <div class="advertisement"> <img src="http://placehold.it/320x100" alt=""> </div> <div class="clearfix"></div> </div> <div class="right-sidebar"> <div class="domain-title">Videos Relacionados:</div> <div class="related-videos"> <div class="related-video" ng-repeat="n in [0,1,2,3,4,5,6,7,8]"> <img src="http://placehold.it/120x120" alt=""> <div class="info"> <div class="category">Programa</div> <div class="title">Related video title lorem ipsum</div> <div class="metadata"> <div class="date pull-left"> Domingo, 12/06/2016</div> <div class="duration pull-right">Duración: 23 min.</div> <div class="clearfix"></div> </div> </div> <div class="clearfix"></div> </div> </div> </div> <div class="clearfix"></div> </div>'),a.put("views/partials/videos-section.html",'<slick slides-to-show="5" slides-to-scroll="1" class="videos-section"> <div class="video-item" ng-repeat="news in videoNews"> <div class="video-container"> <img ng-src="{{news.heroImage}}" alt=""> </div> <div class="video-caption"> <a ng-href="{{news.link}}"> {{news.title}} </a> </div> </div> </slick>')}]);