'use strict';

/**
 * @ngdoc function
 * @name oneillitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oneillitApp
 */
angular.module('oneillitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
