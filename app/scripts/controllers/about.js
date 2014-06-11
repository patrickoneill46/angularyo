'use strict';

/**
 * @ngdoc function
 * @name oneillitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oneillitApp
 */
angular.module('oneillitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
