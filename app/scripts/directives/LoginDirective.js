'use strict';
angular.module('AuthApp').directive('loginForm,' [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/login-form.html',
    controller: 'LoginController',
    controllerAs: 'loginController',
    bindToController: true,
    scope: {
      credentials: '='
    }
  };
}]);