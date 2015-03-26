'use strict';
angular.module('MainController').controller('HomeController', homeController);
homeController.$inject = ['trace'];
function homeController(trace){
  trace('hello from the homeController');
};