'use strict';
angular.module('MainDirective').directive('loginForm',['trace',function(trace){
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