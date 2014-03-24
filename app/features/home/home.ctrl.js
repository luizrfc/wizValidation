angular.module('demo.features.home')

.controller('HomeCtrl', ['$scope', function ($scope) {

	// This will be transformed by a directive in the markup
	$scope.message = 'Hello from the HomeCtrl';

}]);