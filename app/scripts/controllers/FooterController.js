'use strict';
angular.module('MainController').controller('FooterController',footerController);
footerController.$inject = ['trace'];
function footerController(trace){
  var vm = this;
  vm.links = [
    { name: 'Github', url: 'https://github.com/fishermanswharff' },
    { name: 'Twitter', url: 'https://twitter.com/jasonwharff' }
  ];
  trace('hello from the footerController');
};