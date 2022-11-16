(function(){

    // 'use strict';
    angular.module('myToDoList',[])

        .controller("myCtrl",function($scope) {
            $scope.products = ["Java" , "C++"];
            $scope.addItem = function () {
              $scope.errortext = "";
               if (!$scope.addMe) { return; }
               if ($scope.products.indexOf($scope.addMe) == -1) {
                  $scope.products.push($scope.addMe);
               }
               else {
                  $scope.errortext = "This item is already in the list.";
               }
            }
            $scope.removeItem = function (x) {
                $scope.products.splice(x, 1);
            }
        });
})();
