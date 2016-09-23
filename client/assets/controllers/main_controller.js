
app.controller('userController', function(userFactory, $scope, $location) {

  $scope.registerUser = function() {
    //send register user a new_user object and a callback function
    userFactory.registerUser($scope.new_user, function(data){
      console.log(data);
      $scope.new_user = {};
      $location.url('/success');
    })
  };
  $scope.loginUser = function() {
    userFactory.loginUser($scope.user, function(data){
      console.log(data);
      $scope.user = data;
      console.log($scope.user, $scope.user.user);
      $location.url('/success');
    })
  };
  $scope.logoutUser = function() {
    userFactory.logoutUser();
    $location.url('/index');
  };
});
