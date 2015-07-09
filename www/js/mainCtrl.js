angular.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
    $scope.display='0';

    $scope.answer = function(){
      var x   = $scope.memory * 1,
          y   = $scope.display * 1,
          ans = 0;

      switch($scope.operator){
        case '+':
          ans = x + y;
          break;
        case '-':
          ans = x - y;
          break;
        case '*':
          ans = x * y;
          break;
        case '/':
          ans = x / y;
      }

      $scope.display = ans;
      $scope.operator = $scope.memory = '';
    };

    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };

    $scope.clearDisplay = function(){
      $scope.display = '0';
    };

    $scope.number = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.square = function(){
      var x   = $scope.display * 1,
      ans = x*x;
      $scope.display = ans;
    };

    $scope.root = function(){
      var x   = $scope.display * 1,
      ans = Math.sqrt(x);
      $scope.display = ans;
    };


    $scope.trig = function(trigType){
      var x = $scope.display *1;
      switch(trigType){
        case 'cos':
          var ans = Math.cos(x)
          break;
        case 'sin':
          var ans = Math.sin(x);
          break;
        case 'tan':
          var ans = Math.tan(x);
          break;
        case 'acos':
          var ans = Math.acos(x);
          break;
        case 'asin':
          var ans = Math.asin(x);
          break;
        case 'atan':
          var ans = Math.atan(x);
          break;
      }
      $scope.display = ans
    }
}]);
