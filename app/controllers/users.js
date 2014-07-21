/* Users Controller */
var UsersCtrl = angular.module('angular-rest-api.usersController', []);

UsersCtrl.controller('UsersCtrl', ['$scope', function($scope){
  $scope.users = [{name: 'Gustavo'}, {name: 'Bruna'}];
}]);
