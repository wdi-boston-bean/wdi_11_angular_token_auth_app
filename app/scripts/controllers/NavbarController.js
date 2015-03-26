'use strict';
angular.module('MainController').controller('NavbarController',navbarController);
navbarController.$inject = ['AuthFactory','$location','trace'];
function navbarController(AuthFactory,$location,trace){
  var vm = this;

  vm.isLoggedin = function(){
    trace(AuthFactory.isAuthenticated());
    return AuthFactory.isAuthenticated();

  };

  vm.logout = function(){
    AuthFactory.logout().then(function(){
      $location.path('/');
    });

  };
  trace('hello from navbarController');
}
