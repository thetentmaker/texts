'use strict';

/* Controllers */


function GrowthCtrl($scope) {

	
  $scope.weight = 1;
  $scope.height = 40;
  var boysheight = [[0, 49], [1, 54], [2, 58], [3, 61], [4, 64], [5, 66],
  				[6, 67.6], [7, 69], [8, 70.5], [9, 72], [10, 73], [11, 74.5],
  				[12, 75.7], [13, 77], [14, 78], [15, 79], [16, 80], [17, 81],
  				[18, 82], [19, 83], [20, 84], [21, 85], [22, 86], [23, 87], [24, 88], [10, $scope.height]];
  $scope.boysheight = boysheight;

  var boysweight = [[0, 3.3], [1, 4.5], [2, 5.5], [3, 6.3], [4, 7], [5, 7.5],
  				[6, 7.9], [7, 8.3], [8, 8.6], [9, 8.9], [10, 9.1], [11, 9.4],
  				[12, 9.6], [13, 9.9], [14, 10.1], [15, 10.3], [16, 10.5], [17, 10.9],
  				[18, 10.9], [19, 11.1], [20, 11.3], [21, 11.5], [22, 11.7], [23, 11.9], [24, 12.15], [10, $scope.weight]];
  $scope.boysweight = boysweight


  $scope.change = function(){ 
    
    boysheight = [[0, 49], [1, 54], [2, 58], [3, 61], [4, 64], [5, 66],
  				[6, 67.6], [7, 69], [8, 70.5], [9, 72], [10, 73], [11, 74.5],
  				[12, 75.7], [13, 77], [14, 78], [15, 79], [16, 80], [17, 81],
  				[18, 82], [19, 83], [20, 84], [21, 85], [22, 86], [23, 87], [24, 88], [10, $scope.height]];
  	$scope.boysheight = boysheight;

  	boysweight = [[0, 3.3], [1, 4.5], [2, 5.5], [3, 6.3], [4, 7], [5, 7.5],
  				[6, 7.9], [7, 8.3], [8, 8.6], [9, 8.9], [10, 9.1], [11, 9.4],
  				[12, 9.6], [13, 9.9], [14, 10.1], [15, 10.3], [16, 10.5], [17, 10.9],
  				[18, 10.9], [19, 11.1], [20, 11.3], [21, 11.5], [22, 11.7], [23, 11.9], [24, 12.15], [10, $scope.weight]];
  	$scope.boysweight = boysweight; 

  };
 

}


function PlateCtrl($scope) {

	

}
