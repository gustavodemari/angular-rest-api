/* Main App Angular*/
var app = angular.module('angular-rest-api.core',[
  'ngRoute',
  'angular-rest-api.services',
  'angular-rest-api.controllers'
  ]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/users', {templateUrl:'views/users.html', controller: 'UsersListCtrl'});
}])