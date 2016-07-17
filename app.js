angular.module('App', [])
.controller('MainCtrl', function($scope, $http) {
  var reload = function() {
    return $http({
      method: 'GET',
      url: '/thelist'
    }).success(function(res) {
      $scope = res;
    })
  }
})