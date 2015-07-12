var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.name = "Ari Lerner";
});

app.controller('MyController', function($scope) {
  $scope.person = {
    name: "Dominic Damico"
  };
});

app.controller('ParentController', function($scope) {
  $scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.greeted = true;
  }
});

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = '/home/dominic/.config/google-chrome/Default/Extensions/lccekmodgklaepjeofjdjpbminllajkg/0.3.0.5_0/audio';
  $scope.play = function() {
    $scope.audio.play();
    $scope.playing = true;
  };
  $scope.stop = function() {
    $scope.audio.pause();
    $scope.playing = false;
  };
  $scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stop()
    });
  });
}]);


app.controller('RelatedController', ['$scope', function($scope) {
}]);
