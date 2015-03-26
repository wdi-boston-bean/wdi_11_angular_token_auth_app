'use strict';
angular.module('MainController').controller('PostsController',postsController);

postsController.$inject = ['trace','PostsFactory'];

function postsController(trace,PostsFactory){
  var vm = this;
  vm.posts = PostsFactory.posts;
};