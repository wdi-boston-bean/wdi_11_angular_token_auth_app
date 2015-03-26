'use strict';
angular.module('AuthApp').service('trace',[function(){
  return function trace(){
    for(var i = 0; i < arguments.length; i++){
      console.log(arguments[i]);
    }
  };
}]);