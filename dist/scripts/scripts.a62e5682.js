"use strict";angular.module("telesurApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("telesurApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("telesurApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("telesurApp").run(["$templateCache",function(a){a.put("views/about.html",""),a.put("views/main.html",'<div class="subnav"> <div class="container"> <div class="breadcrumbs pull-left"> <p>Explorando: Página Inicial > Notícias en destaque</p> </div> <div class="menu-principal pull-right"> <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> <span>Menú Principal</span> </div> <div class="clearfix"></div> </div> </div> <div class="container"> <div class="domain-container"> </div> </div> <div class="container"> <ng-include src="\'views/partials/videos-section.html\'"></ng-include> <div class="section" ng-repeat="n in [0,1,2,3,4,5]"> </div> </div>'),a.put("views/partials/header.html",'<!-- Add your site or application content here --> <header> <div class="container"> <section class="header-info"> <div class="logo text-center"> <div class="logo-image text-center"> <img src="http://placehold.it/44x44" alt=""> </div> <div class="language-switch"><a href="#"> Cambiar a inglés </a></div> </div> <div class="time-weather text-center"> <div class="time"> <p>Martes, 14 de junio</p> </div> <div class="weather"> <span class="glyphicon glyphicon-cloud" aria-hidden="true"></span> <span>Caracas. 19 C</span> </div> </div> <div class="session-info text-center"> <img src="http://placehold.it/30x30" class="img-circle" alt=""> <p>Bienvenido(a),</p> <p>Visitante</p> </div> </section> <section class="header-nav"> <ul> <li class="active">Explore</li> <li>Vea</li> <li>Participe</li> <li>Mi teleSUR</li> </ul> </section> <section class="header-extra text-center"> <div class="live-signal"> <p>Señal en vivo</p> <p>En el aire: Conexión Global</p> </div> <div class="social-search"> <div class="socials-container"> <img src="http://placehold.it/16x16" alt="" ng-repeat="n in [0,1,2,3,4,5]"> </div> <div class="search"> <form role="form"> <div class="form-group"> <i class="glyphicon glyphicon-search"></i> <input type="email" class="form-control" id="email" placeholder="Buscar en teleSUR"> </div> </form> </div> </div> </section> </div> </header>'),a.put("views/partials/videos-section.html",'<div class="videos-section"> <div class="video-item" ng-repeat="n in [0,1,2,3,4]"> <div class="video-container"> <img src="http://placehold.it/242x160" alt=""> </div> <div class="video-caption"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> </div> </div> <div class="clearfix"></div> </div>')}]);