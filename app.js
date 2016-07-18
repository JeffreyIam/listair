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
    return $http({
      method:'POST',
      url: '/listings',
      data: $scope.post
    });
    console.log($scope);
    refresh();
  }

  $scope.remove = function(id) {
    console.log('removing from app' , id )
    $http.delete('/listings/' + id).success(function(res) {
      console.log('logging res from within remove ' + res);
      refresh();
    });
  }
})