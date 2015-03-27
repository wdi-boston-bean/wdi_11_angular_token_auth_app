(function(){
  'use strict';
  angular
    .module('AuthApp', ['ngRoute']);

  angular
    .module('AuthApp')
    .config(authAppConfig)
    .controller('NavbarCtrl', NavbarCtrl);

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

  NavbarCtrl.$inject = ['$location'];

  function NavbarCtrl( $location ) {
    var vm = this;

    vm.isActive = function( viewLocation ) {
      return viewLoaction === $location.path();
    };
  }

})();