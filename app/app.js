/* Main App Angular*/
var app = angular.module('angular-rest-api',[
  'ngRoute',
  'angular-rest-api.usersController'
  ]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/users', {templateUrl:'views/users.html', controller: 'UsersCtrl'});
}])