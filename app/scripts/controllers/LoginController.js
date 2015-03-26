'use strict';
angular.module('MainController').controller('LoginController',loginController);

loginController.$inject = ['AuthFactory','$location','trace'];

function loginController(AuthFactory,$location,trace){
  var vm = this;
  
  vm.login = function(credentials){
    AuthFactory.login(credentials).then(function(response){
      vm.credentials = {};
      $location.path('/');
    });
  };

  vm.newUser = function(){
    vm.createUser = true;
  };
};