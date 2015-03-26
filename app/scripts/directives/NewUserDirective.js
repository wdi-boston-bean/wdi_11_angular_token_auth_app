'use strict';
angular.module('MainDirective').directive('newUser',['trace',function(trace){
  return {
    restrict: 'E',
    templateUrl: 'views/new-user-form.html',
    controller: 'LoginController',
    controllerAs: 'loginController',
    bindToController: true,
    scope: {},
    link: function($scope,element,attrs){
      
    }
  };
}]);