'use strict';
angular.module('MainDirective').directive('gaNavbar',['trace',function(trace){
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavbarController',
    controllerAs: 'navbarController',
    bindToController: true,
    scope: {
      tasks: '='
    },
    link: function($scope,element,attrs){
      
    }
  };
}]);