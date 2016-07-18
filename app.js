var sep = angular.module('theApp', []);

sep.controller('maincontroller', function($scope, $http) {
  var refresh = function() {
    return $http({
      method:'GET',
      url: '/listings'
    }).success(function(res) {
      $scope.itemlist = res;
    });
  };

  refresh();

  $scope.addItem = function(post) {
    $http({
      method:'POST',
      url: '/listings',
      data: post
    });
     refresh();
  }

  $scope.remove = function(id) {
    $http.delete('/listings/' + id).success(function(res) {
      refresh();
    });
  }
})