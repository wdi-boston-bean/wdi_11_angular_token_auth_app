'use strict';
angular.module('MainDirective').directive('gaFooter',[function(){
  return {
    restrict: 'E',
    templateUrl: 'views/footer.html',
    controller: 'FooterController',
    controllerAs: 'footerController',
    bindToController: true,
    scope: {},
    link: function($scope,element,attrs){}
  };
}]);