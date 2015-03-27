(function(){
  'use strict';
  angular
    .module('AuthApp', ['ngRoute']);

  angular
    .module('AuthApp')
    .config(authAppConfig);

  function authAppConfig( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/templates/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsController',
        controllerAs: 'PostsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();