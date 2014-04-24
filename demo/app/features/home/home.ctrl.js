angular.module('demo.features.home')

	.controller('HomeCtrl', ['$scope', function ($scope) {

		$scope.demo = {};		
		$scope.today = new Date();
		$scope.addDay = function () {
			$scope.today.setDate($scope.today.getDate() + 1);
		};

	}]);