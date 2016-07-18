var sep = angular.module('theApp', []);

sep.controller('maincontroller', function($scope, $http) {
  var refresh = function() {
    return $http({
      method:'GET',
      url: '/listings'
    }).success(function(res) {
      console.log(res);
      console.log('getting from controller')
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
})