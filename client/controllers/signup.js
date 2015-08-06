angular.module('Instacat')
  .controller('SignupCtrl', function($scope, $auth) {

    $scope.signup = function() {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      // Satellizer
      $auth.signup(user)
        .catch(function(response) {
          console.log(response.data);
        });
    };

  });