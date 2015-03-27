'use strict';
angular
  .module('MainController').controller('LoginController', loginController);

loginController.$inject = ['$location', 'AuthFactory'];

function loginController( $location, AuthFactory ) {
  var vm = this;

  vm.login = function( credentials ) {
    AuthFactory.login().then(function(){
      vm.credentials = {};
      $location.path('/');
    });
  };
}